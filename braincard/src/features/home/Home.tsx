import { BottomNavigation, BottomNavigationAction, List, ListItem,ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Menu from "../menu/Menu";

const collections = ["c1", "c2", "c3"] 
function Home() {
  
  return (
    <Box sx={{ pb: 5 }}>
      <CssBaseline />
      <List>
        {collections.map((primary, index) => (
          <ListItem button key={index}>
            <ListItemText primary={primary} />
          </ListItem>
        ))}
      </List>
      <Menu></Menu>

    </Box>
  );
}

export default Home;
