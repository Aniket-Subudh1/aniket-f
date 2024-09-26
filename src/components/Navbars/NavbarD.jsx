import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { NAVBAR_HEIGHT } from "../../constants";
import useScrollPosition from "../../hooks/useScrollPosition";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountBalanceWallet as WalletIcon } from "@mui/icons-material";


import Logo from "../../assets/images/logo.png";

const NavbarD = ({ isWalletConnected, connectWallet, activeTab, setActiveTab }) => {
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

          {/* Navigation Links and Connect Button */}
          {!isMobile ? (
            <Stack direction="row" spacing={5} alignItems="center">
              {/* Navigation Tabs */}
              <nav style={{ display: 'flex', overflowX: 'auto' }}>
                {['status', 'apply', 'repay', 'history', 'help'].map((tab) => (
                  <Button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    variant={activeTab === tab ? 'contained' : 'outlined'}
                    color="primary"
                    style={{ marginRight: 8 }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </Button>
                ))}
              </nav>

              {/* Connect Wallet Button */}
              {!isWalletConnected && (
                <Button
                  onClick={connectWallet}
                  variant="contained"
                  color="primary"
                  startIcon={<WalletIcon />}
                >
                  Connect Wallet
                </Button>
              )}
            </Stack>
          ) : (
            <IconButton>
              <MenuIcon sx={{ color: "text.secondary" }} />
            </IconButton>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default NavbarD;
