import React from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { logoTheme } from "~/components/theme";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "~/hooks";
import { filter } from "lodash";

interface Props {
  open: boolean;
  onClose: Function;
}

const Sidebar: React.FC<Props> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const to = (to: string) => {
    navigate(to);
    onClose(false);
  };

  const { list } = useAppSelector((state) => state.categories);

  return (
    <Drawer anchor="right" open={open} onClose={() => onClose()}>
      <Box sx={{ width: "250px" }}>
        <Box py={2}>
          <ThemeProvider theme={logoTheme}>
            <Typography variant="h3" align="center">
              La Rapida
            </Typography>
          </ThemeProvider>
        </Box>
        <Divider />

        <List>
          <ListItemButton onClick={() => to("/")}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </List>
        <Divider />

        <List>
          {filter(list, "show_online").map((cat) => (
            <ListItemButton key={cat.id} onClick={() => to("/" + cat.url)}>
              <ListItemText primary={cat.name} />
            </ListItemButton>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
