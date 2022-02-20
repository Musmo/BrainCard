import { BottomNavigation, BottomNavigationAction, List, ListItem,ListItemText } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Paper from "@mui/material/Paper";
import { useState } from "react";
function Menu() {
  const [value, setValue] = useState(null);
 return(
  
  <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Cards"
        icon={<DashboardCustomizeOutlinedIcon />}
      />
      <BottomNavigationAction label="Favorites" icon={<FavoriteBorderIcon />} />
      <BottomNavigationAction label="Account" icon={<ManageAccountsIcon />} />
    </BottomNavigation>
  </Paper>
 )
}

export default Menu;
