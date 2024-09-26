import {
    AppBar,
    Container,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import React from "react";
  import { NAVBAR_HEIGHT } from "../../constants";
  import useScrollPosition from "../../hooks/useScrollPosition";
  import { navbarContent } from "../../utils/content";
  import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
  import ConnectButton from "../Buttons/ConnectButton";
  import MenuIcon from "@mui/icons-material/Menu";
  import LButton from "../Buttons/LButton";
  
  const { Logo } = navbarContent;
  
  const LinkButton = ({ children, ...props }) => (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.2}
      sx={{
        cursor: "pointer",
        color: "text.secondary",
        "&:hover": { color: "text.primary" },
      }}
      {...props}
    >
      {children}
    </Stack>
  );
  
  const NavbarC = () => {
    const scrollPosition = useScrollPosition();
  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  
    return (
      <AppBar
        elevation={0}
        sx={{
          py: 1,
          height: NAVBAR_HEIGHT,
          bgcolor: scrollPosition > 10 ? "rgba(7,7,16,.7)" : "transparent",
          backdropFilter: scrollPosition > 10 && "blur(60px)",
        }}
      >
        <Container
          sx={{
            [theme.breakpoints.up("lg")]: {
              maxWidth: "1380px!important",
            },
  
  
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            {/* Logo */}
            <img
              src={Logo}
              style={{
                height: isMobile ? "40px" : "50px",
                width: "auto", 
                objectFit: "contain", 
              }}
              alt="Credify Logo"
            />
  
            {/* Links */}
            {!isMobile && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={6}
                sx={{ flex: 1 }}
                flexWrap="wrap"
              >
              
              </Stack>
            )}
  
            {/* Action Buttons */}
            {isMobile ? (
              <IconButton>
                <MenuIcon sx={{ color: "text.secondary" }} />
              </IconButton>
            ) : (
              <Stack direction="row" spacing={5} alignItems="center">
                
               
              </Stack>
            )}
          </Stack>
        </Container>
      </AppBar>
    );
  };
  
  export default NavbarC;
  