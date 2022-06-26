import React from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { IconMenu2 } from "@tabler/icons";
import { Box } from "@mui/system";
import DrawerContent from "./Drawer";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <AppBar color="inherit" position="fixed" elevation={0}>
        <Toolbar>
          <IconButton
            onClick={() => setOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <IconMenu2 />
          </IconButton>

          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" underline="none" color="inherit">
              <b>La Rapida</b>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <DrawerContent handleClose={() => setOpen(false)} />
      </Drawer>

      <Box sx={{ pt: "64px" }}>{children}</Box>

      <Footer />
    </React.Fragment>
  );
}
