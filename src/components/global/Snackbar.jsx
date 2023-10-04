import React, { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const CustomSnackbar = ({ open, message, severity, onClose }) => {
  // Define a CSS class based on the severity
  let alertClass = "";

  if (severity === "success") {
    alertClass = "success-alert"; // Apply a green color for success
  } else if (severity === "error") {
    alertClass = "error-alert"; // Apply a different color for error
  } else {
    // Add more conditions for other severities if needed
  }

  return (
    <Snackbar open={open} autoHideDuration={1000} onClose={onClose}>
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={onClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default CustomSnackbar;
