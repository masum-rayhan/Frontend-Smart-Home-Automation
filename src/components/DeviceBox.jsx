import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { tokens } from "../theme";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const DeviceBox = ({ device, index }) => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);

  // Initialize state for the device's on/off status
  const [isDeviceOn, setIsDeviceOn] = useState(false);
  const [deviceType, setDeviceType] = useState("outline");
   // Toggle the device's status when the button is clicked
   const handleToggle = () => {
    setIsDeviceOn((prevIsDeviceOn) => !prevIsDeviceOn);
    setDeviceType((prevDeviceType) => 
      prevDeviceType === "outline" ? "filled" : "outline"
    );
  };
  // console.log(device);

  return (
    <>
      <Box
        key={`${device}-${index}`}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        p="15px"
      >
        <Box color={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
          {deviceType === "outline" ? (
            <EmojiObjectsOutlinedIcon style={{ fontSize: "45px" }} />
          ) : (
            <EmojiObjectsIcon style={{ fontSize: "45px" }} />
          )}
        </Box>
        <Box>
          {/* Render device information here */}
          <Typography color={colors.grey[100]}>{device.name}</Typography>
        </Box>
        <Box
          color={colors.greenAccent[500]}
          p="5px 10px"
          borderRadius="4px"
          onClick={ handleToggle }
        >
          {isDeviceOn ? (
            <ToggleOnIcon color="primary" style={{ fontSize: "45px" }} />
          ) : (
            <ToggleOffIcon color="disabled" style={{ fontSize: "45px" }} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default DeviceBox;
