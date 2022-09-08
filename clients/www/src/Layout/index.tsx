import React from "react";
import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { IconMenu2, IconMessage2 } from "@tabler/icons";
import { Box } from "@mui/system";
import DrawerContent from "./Drawer";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <AppBar color="inherit" position="sticky" elevation={0}>
        <Toolbar>
          <IconButton
            onClick={() => setOpen(true)}
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
          >
            <IconMenu2 />
          </IconButton>

          <Typography
            variant="h4"
            component="h6"
            onClick={() => navigate("/")}
            sx={{
              fontFamily: "'Mrs Sheppards', cursive;",
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            La Rapida
          </Typography>

          <IconButton
            color="primary"
            size="large"
            edge="end"
            onClick={() => navigate("/contatti")}
          >
            <IconMessage2 />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <DrawerContent handleClose={() => setOpen(false)} />
      </Drawer>

      <Box>{props.children}</Box>

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
