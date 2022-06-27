import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconHome,
  IconMail,
} from "@tabler/icons";
import { isEmpty } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DrawerContent({ handleClose }) {
  const navigate = useNavigate();
  let { categorie } = useSelector((state) => state.magazzino);

  const handleClick = (to) => {
    handleClose(false);
    navigate(to);
  };

  return (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem button onClick={() => handleClick("/")}>
          <ListItemIcon>
            <IconHome />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button onClick={() => handleClick("/contatti")}>
          <ListItemIcon>
            <IconMail />
          </ListItemIcon>
          <ListItemText primary="Contatti" />
        </ListItem>
      </List>
      <Divider />

      {!isEmpty(categorie.list) && (
        <div>
          <List subheader={<ListSubheader>Servizi</ListSubheader>}>
            {categorie.list.map((e, k) => {
              return e.sito === true ? (
                <ListItem
                  button
                  key={"categoria-" + k}
                  onClick={() => handleClick("/" + e.url)}
                >
                  <ListItemText primary={e.nome} />
                </ListItem>
              ) : null;
            })}
          </List>
          <Divider />
        </div>
      )}

      <List>
        <ListItem
          button
          onClick={() =>
            window.open("https://facebook.com/larapidamolinetto", "_blank")
          }
        >
          <ListItemIcon>
            <IconBrandFacebook />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </ListItem>

        <ListItem
          button
          onClick={() =>
            window.open("https://instagram.com/larapidamolinetto", "_blank")
          }
        >
          <ListItemIcon>
            <IconBrandInstagram />
          </ListItemIcon>
          <ListItemText primary="Instagram" />
        </ListItem>
      </List>
    </Box>
  );
}
