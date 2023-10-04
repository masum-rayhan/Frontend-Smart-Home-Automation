import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  colors, // Add IconButton from MUI
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { useCreateDeviceMutation } from "../../apis/deviceApi";
import Snackbar from "../../components/global/Snackbar";
import CustomSnackbar from "../../components/global/Snackbar";

const CreateDeviceModal = ({ open, onClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [createDevice, { isLoading, isError }] = useCreateDeviceMutation();
  const handleCreateDevice = async () => {
    // Check if required fields are not empty
    if (!formData.name || !formData.deviceType || !formData.location) {
      console.error("Required fields are empty");
      return;
    }
    try {
      const response = await createDevice(formData); // Call the mutation with form data
      if (!response.error) {
        handleSnackbarOpen("Device created successfully", "success");
        onClose(); // Close the modal
      } else {
        console.error("Error creating device:", response.error);
      }
    } catch (error) {
      console.error("Error creating device:", error);
    }
  };

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
          />
          <TextField
            name="deviceType"
            label="Device Type"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.deviceType}
            onChange={handleChange}
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
