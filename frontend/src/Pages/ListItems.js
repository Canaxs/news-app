import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListIcon from '@mui/icons-material/List';
import Link from '@mui/material/Link';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';


export const mainListItems = (
  <React.Fragment>
    <Link href="/#/dashboard" underline="none" color="red">
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    </Link>
    <Link href="/#/dashboard/news-create" underline="none" color="red">
    <ListItemButton>
      <ListItemIcon>
        <NewspaperIcon />
      </ListItemIcon>
      <ListItemText primary="News Create" />
    </ListItemButton>
    </Link>
    <Link href="/#/dashboard/news-delete" underline="none" color="red">
    <ListItemButton>
      <ListItemIcon>
        <DeleteSweepIcon />
      </ListItemIcon>
      <ListItemText primary="News Delete" />
    </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <Link href="/#/dashboard/users" underline="none" color="red">
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    </Link>
    <Link href="/#/dashboard/slider" underline="none" color="red">
    <ListItemButton>
      <ListItemIcon>
        <PhotoOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Slider" />
    </ListItemButton>
    </Link>
    <Link href="/#/dashboard/slider-create" underline="none" color="red">
    <ListItemButton>
      <ListItemIcon>
        <AddPhotoAlternateIcon />
      </ListItemIcon>
      <ListItemText primary="Slider Create" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);