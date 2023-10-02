import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import { useGetDevicesQuery } from "../../apis/device";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setDevice } from "../../storage/deviceSlice";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import StateBox from "../../components/StateBox";

const Dashboard = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetDevicesQuery();
  const dispatch = useDispatch();
  // const [isDeviceOn, setIsDeviceOn] = useState(false);
  // const [deviceStates, setDeviceStates] = useState(false);

  // useEffect(() => {
  //   if (!isLoading) {
  //     dispatch(setDevice(data.result));
  //   }
  // }, [isLoading]);

  // console.log(data.result);

  // const handleToggle = (index) => {
  //   // Step 3: Update the state of the specific device
  //   const newDeviceStates = [...deviceStates];
  //   newDeviceStates[index] = !newDeviceStates[index];
  //   setDeviceStates(newDeviceStates);

  //   console.log("toggle");
  // };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Box m="20px">
      {/* HEADER */}

      <Box
        display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StateBox
              title="12,361"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              // icon={
              //   <EmailIcon
              //     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              //   />
              // }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StateBox
              title="431,225"
              subtitle="Sales Obtained"
              progress="0.50"
              increase="+21%"
              // icon={
              //   <PointOfSaleIcon
              //     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              //   />
              // }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StateBox
              title="32,441"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              // icon={
              //   <PersonAddIcon
              //     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              //   />
              // }
            />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            width="100%"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StateBox
              title="1,325,134"
              subtitle="Traffic Received"
              progress="0.80"
              increase="+43%"
              // icon={
              //   <TrafficIcon
              //     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              //   />
              // }
            />
          </Box>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={8}
          lg={8}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid xs={12}>
            <Box backgroundColor={colors.primary[400]}>
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    Revenue Generated
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.greenAccent[500]}
                  >
                    $58,373,698
                  </Typography>
                </Box>
                <Box>
                  <IconButton>
                    <DownloadOutlinedIcon
                      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box height="250px" m="-20px 0 0 0">
                {/* <LineChart isDashboard={true} /> */}
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Box backgroundColor={colors.primary[400]} p="30px">
              <Typography variant="h5" fontWeight="600">
                Campaign
              </Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
              >
                {/* <ProgressCircle size="125" /> */}
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                  sx={{ mt: "15px" }}
                >
                  $48,352 revenue generated
                </Typography>
                <Typography>
                  Includes extra misc expenditures and costs
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Box backgroundColor={colors.primary[400]}>
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ padding: "30px 30px 0 30px" }}
              >
                Sales Quantity
              </Typography>
              <Box height="250px" mt="-20px">
                {/* <BarChart isDashboard={true} /> */}
              </Box>
            </Box>
          </Grid>
          <Grid xs={12}>
            <Box backgroundColor={colors.primary[400]} padding="30px">
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
              >
                Geography Based Traffic
              </Typography>
              <Box height="200px">
                {/* <GeographyChart isDashboard={true} /> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            backgroundColor={colors.primary[400]}
            maxHeight="100vh"
            overflow="auto"
            m="25px 0 0 0"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              color={colors.grey[100]}
              p="15px"
            >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Devices
              </Typography>
            </Box>
            <Box
              // key={`${device}-${index}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box
                color={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                <EmojiObjectsOutlinedIcon style={{ fontSize: "45px" }} />
                <EmojiObjectsIcon style={{ fontSize: "45px" }} />
              </Box>
              <Box>
                {/* <Typography color={colors.grey[100]}>{device.name}</Typography> */}
              </Box>
              <Box
                color={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                onClick={() => handleToggle(index)}
              >
                <ToggleOnIcon color="primary" style={{ fontSize: "45px" }} />
                <ToggleOffIcon color="disabled" style={{ fontSize: "45px" }} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
