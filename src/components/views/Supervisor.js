// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
// import { mainListItems, secondaryListItems } from './listItems';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from "react-router-dom";
import fetchSupervisorsData from '../api/fetchSupervisorsData'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();



const Supervisor = () => {

  const [Supervisors, setSupervisors] = useState([])

  useEffect(() => {
    const getData = async () => {
      const result = await fetchSupervisorsData();
      if(result.status == 200){
        setSupervisors(result.supervisors)
        debugger
      }
    }
  //     const response = await fetch('http://127.0.0.1:8000/api/register/supervisor');
  getData();
  }, []);

// table data


   const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 300 },
      { field: 'email', headerName: 'Email', width: 300 },
      { field: 'number', headerName: 'Number', width: 300 },
      // { field: 'status', headerName: 'Status', width: 200 },
      // { field: 'actions', headerName: 'Actions', width: 200 },
    ];
    
    // const rows = [
    //   { id: 1, Name: 'Snow', email: 'Jon@gmail.com', number: 8885848123, status:'active', actions:'Edit'},
    //   { id: 2, Name: 'Lannister', email: 'Cersei@gmail.com', number: 8976545678, status:'active', actions:'Edit' },
    //   { id: 3, Name: 'Lannister', email: 'Jaime@gmail.com', number: 8976545678, status:'active', actions:'Edit' },
    //   { id: 4, Name: 'Stark', email: 'Arya@gmail.com', number: 8976545678, status:'active' , actions:'Edit'},
    //   { id: 5, Name: 'Targaryen', email: 'Daenerys@gmail.com', number: 8976545678, status:'active', actions:'Edit' },
    //   { id: 6, Name: 'Melisandre', email: 'szdffd@gmail.com', number: 8976545678, status:'Inactive' , actions:'Edit'},
    //   { id: 7, Name: 'Clifford', email: 'Ferrara@gmail.com', number: 78878787878, status:'active', actions:'Edit' },
    //   { id: 8, Name: 'Frances', email: 'Rossini@gmail.com', number: 8976545678, status:'active', actions:'Edit'},
    //   { id: 9, Name: 'Roxie', email: 'Harvey@gmail.com', number: 8976545678, status:'active', actions:'Edit' },
    // ];



    // table data
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const Supervisor = () => {
      navigate("/supervisor");
  }
  const addSupervisor = () => {
      navigate("/addSupervisor")
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">


          <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText onClick={Supervisor} primary="Supervisor" />
    </ListItemButton>
  </React.Fragment>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
          <Button onClick={addSupervisor} variant="contained">Add Supervisor</Button>
          {/* </div> */}
            <Grid container>
              <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                  rows={Supervisors}
                  columns={columns}
                  initialState={{
                     pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                     },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                  />
               </div>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {/* <Orders /> */}
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
};

export default  Supervisor;