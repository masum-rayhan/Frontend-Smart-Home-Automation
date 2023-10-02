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

const CreateDeviceModal = ({ open, onClose, onCreate }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [formData, setFormData] = useState({
    name: "",
    deviceType: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onCreate(formData);
    onClose(); // Close the modal after creating the device
  };

  return (
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
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Create
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDeviceModal;
