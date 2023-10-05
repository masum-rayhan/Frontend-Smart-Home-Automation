import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  colors,
  FormControl,
  InputLabel, // Add IconButton from MUI
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import {
  useCreateDeviceMutation,
  useGetDeviceTypesQuery,
  useGetDevicesQuery,
} from "../../apis/deviceApi";
import CustomSnackbar from "../../components/global/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

const CreateDeviceModal = ({ open, onClose }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  // Fetch device types data using the generated query hook
  const { data: deviceTypesData, error } = useGetDeviceTypesQuery();

  const handleSnackbarOpen = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    deviceType: "",
    location: "",
  });

  // Function to reset the form fields
  const resetForm = () => {
    setFormData({
      name: "",
      deviceType: "",
      location: "",
    });
    // setFormData({ ...formData, deviceType: null }); // Reset selected device type
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [createDevice, { isLoading, isError }] = useCreateDeviceMutation();
  const handleCreateDevice = async () => {
    // Check if required fields are not empty
    if (!formData.name || !formData.deviceType || !formData.location) {
      const errorMessage = "Device Name and Device Type are required.";
      handleSnackbarOpen(errorMessage, "error");
      return;
    }
    try {
      const response = await createDevice({
        name: formData.name,
        deviceType: formData.deviceType.value,
        location: formData.location,
      }); // Call the mutation with form data

      if (!response.error) {
        handleSnackbarOpen("Device created successfully", "success");
        resetForm(); // Reset the form fields
        onClose(); // Close the modal
      } else {
        const errorMessage = `Error creating device: ${response.error}`;
        handleSnackbarOpen(errorMessage, "error");
      }
    } catch (error) {
      const errorMessage = `Error creating device: ${error.message}`;
      handleSnackbarOpen(errorMessage, "error");
    }
  };

  useEffect(() => {
    if (!isLoading && !error) {
      // deviceTypesData contains the response data
      console.log(deviceTypesData);
    }
  }, [deviceTypesData, isLoading, error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle sx={{ backgroundColor: `${colors.primary[400]}` }}>
          Create Device
        </DialogTitle>
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: "8px",
            top: "8px",
          }}
          onClick={onClose} // Close the modal when the close button is clicked
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ backgroundColor: `${colors.primary[400]}` }}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Select
            name="deviceType"
            options={deviceTypesData?.result.map((type) => ({
              value: type.value,
              label: type.displayName,
            }))}
            onChange={(selectedOption) => {
              setFormData({ ...formData, deviceType: selectedOption });
            }}
            value={formData.deviceType}
            placeholder="Select Device Type"
            /** Apply custom styles to match the background color */
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor: `${colors.primary[400]}`,
              }),
              singleValue: (provided) => ({
                ...provided,
                color: `${colors.grey[100]}`,
              }),
              option: (provided) => ({
                ...provided,
                backgroundColor: "white",
                color: "black",
              }),
              input: (provided) => ({
                ...provided,
                color: "white"
              }),
            }}
          />
          <TextField
            name="location"
            label="Location"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.location}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateDevice} // Call the handleCreateDevice function on button click
            disabled={isLoading} // Disable the button while the mutation is in progress
          >
            {isLoading ? "Creating..." : "Create"}
          </Button>
        </DialogContent>
      </Dialog>

      <CustomSnackbar
        open={openSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleSnackbarClose}
      />
    </>
  );
};

export default CreateDeviceModal;
