import React from "react";
import { useAppSelector } from "hooks";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
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
  IconShield,
} from "@tabler/icons";

type Props = {
  handleClose: (status: boolean) => void;
};

const DrawerContent: React.FC<Props> = ({ handleClose }) => {
  const navigate = useNavigate();
  const categorie = useAppSelector((state) => state.categorie);

  const handleClick = (to: string) => {
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

        <ListItem button onClick={() => handleClick("/privacy")}>
          <ListItemIcon>
            <IconShield />
          </ListItemIcon>
          <ListItemText primary="Privacy" />
        </ListItem>
      </List>
      <Divider />

      {!isEmpty(categorie.list) && (
        <div>
          <List subheader={<ListSubheader>Servizi</ListSubheader>}>
            {categorie.list.map((e, k) => {
              const { sito, url, nome } = e;

              return sito === true ? (
                <ListItem
                  button
                  key={"categoria-" + k}
                  onClick={() => handleClick("/" + url)}
                >
                  <ListItemText primary={nome} />
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
};

export default DrawerContent;
