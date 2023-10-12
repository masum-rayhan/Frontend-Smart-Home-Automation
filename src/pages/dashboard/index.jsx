import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import {
  useCreateDeviceMutation,
  useGetDevicesQuery,
} from "../../apis/deviceApi";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addDevice, setDevice } from "../../storage/deviceSlice";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import StateBox from "../../components/StateBox";
import DeviceBox from "../../components/DeviceBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CreateDeviceModal from "../../components/modal/CreateDeviceModal";
import { updateDeviceState } from "../../storage/deviceStateSlice";

const Dashboard = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetDevicesQuery();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setDevice(data.result));
      dispatch(updateDeviceState(data.result));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: `4px solid ${colors.primary[500]}`,
    color: `${colors.grey[100]}`, // Text color
    padding: "15px 0", // Adjusted padding
    width: "100%",
    cursor: "pointer",
    transition: "background-color 0.3s",
    backgroundColor: `${colors.primary[400]}`, // Maintain color on hover
    "&:hover": {
      backgroundColor: `${colors.primary[300]}`, // Maintain color on hover
    },
  };

  const itemsPerPage = 5;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to get devices for the current page
  const devicesOnCurrentPage = data.result.slice(startIndex, endIndex);

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
              <Box>
                <Button
                  variant="outlined"
                  color="inherit"
                  disabled={currentPage === 1}
                  onClick={handlePrevPage}
                  sx={{ marginRight: 1 }}
                >
                  Previous
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  disabled={endIndex >= data.result.length}
                  onClick={handleNextPage}
                >
                  Next
                </Button>
              </Box>
            </Box>

            {devicesOnCurrentPage.map((device, deviceState, index) => (
              <DeviceBox
                key={`${device.id}-${index}`}
                device={device}
                deviceState={deviceState}
                index={index}
                data={data.result}
              />
            ))}
          </Box>
          <Box>
            <Button sx={buttonStyle} onClick={handleOpenModal}>
              <AddBoxIcon />
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Create Device
              </Typography>
            </Button>
            <CreateDeviceModal open={isModalOpen} onClose={handleCloseModal} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
