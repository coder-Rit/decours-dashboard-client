import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import SignIn from "../SignIn";
import { useEffect } from "react";
import axios from "axios";

import { Toaster, toast } from "sonner";
const pages = ["HOME"];
const settings = ["Logout"];

function ResponsiveAppBar() {
  let navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [imagePreview, set_imagePreview] = React.useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    navigate("/");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  async function getImageUrl() {
    try {
      const response = await axios.get(
        "https://decours-dashboard-server.onrender.com/api/v1/getLogo"
      ); // Replace with your API endpoint

      if (!response.data.data) {
        console.log("no api data");
        return;
      }

      set_imagePreview(response.data.data[0].logoUrl);
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  }

  useEffect(() => {
    getImageUrl();
  }, []);


  return (
    <AppBar
      position="static"
      sx={{
        background: "black",
        borderBottom: "0.5px solid rgba(255, 255, 255, 0.385)",
      }}
    >
      <Toaster position="top-center" richColors />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "5px",
              height: "45px",
              width: "50px",
            }}
          >
            <img src={imagePreview} width="50px" alt="" />
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <SignIn></SignIn>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
