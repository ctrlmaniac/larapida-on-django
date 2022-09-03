import React from "react";
import { filter, isEmpty, forEach } from "lodash";
import {
  Container,
  Typography,
  Paper,
  Link,
  Box,
  TextField,
  Button,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { IconSend } from "@tabler/icons";
import api from "api";

const Contatti: React.FC = () => {
  const [formError, setFormError] = React.useState(true);
  const [response, setRespose] = React.useState({
    status: "",
    statusText: "",
  });
  const [values, setValues] = React.useState({
    email: {
      value: "",
      error: true,
    },
    messaggio: {
      value: "",
      error: true,
    },
    privacy: {
      value: false,
      error: true,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: {
        value: value,
        error: value === "" || value === null ? true : false,
      },
    });
  };

  React.useEffect(() => {
    const errorFormObj = filter(values, ["error", true]);

    setFormError(!isEmpty(errorFormObj));
  }, [values]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const obj: { [key: string]: string | boolean } = {};

    forEach(values, (o, k): void => {
      obj[k] = o.value;
    });

    api
      .post("/contatti/", obj)
      .then((response) => {
        setRespose({
          status: response.status.toString(),
          statusText: response.statusText,
        });
      })
      .catch((error) => {
        if (error.response) {
          setRespose({
            status: error.response.status,
            statusText: "Impossibile inviare l'email",
          });
        } else if (error.request) {
          console.log("request");
          console.log(error.request);
        } else {
          console.log("else");
          console.log("Error", error.message);
        }
      });
  };

  const handlePrivacyChange = function (e: any) {
    setValues({
      ...values,
      privacy: {
        ...values.privacy,
        value: !values.privacy.value,
        error: !values.privacy.value === false ? true : false,
      },
    });
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/static/wallpapers/mood.jpg"
          })`,
          backgroundPosition: "center center",
        }}
      >
        <Box
          sx={{
            pt: 6,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Paper sx={{ p: 2, textAlign: "center", mb: 6 }}>
              <Typography variant="h6" gutterBottom>
                Chiamaci
              </Typography>
              <Link href="tel:+390302122560">030 21 22 560</Link>
              <Typography variant="body2">oppure</Typography>
              <Link href="tel:+393277331510">Whatsapp: 327 733 1510</Link>
            </Paper>
          </Container>

          <Container maxWidth="sm">
            <Paper sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                Scrivici
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  id="standard-basic"
                  label="email"
                  name="email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  helperText="scrivi la tua email"
                  margin="normal"
                  value={values.email.value}
                  error={values.email.error}
                  onChange={handleChange}
                  required
                  inputProps={{
                    inputMode: "email",
                    type: "email",
                  }}
                />

                <TextField
                  id="standard-basic"
                  label="messaggio"
                  name="messaggio"
                  variant="outlined"
                  helperText="scrivi il tuo messaggio"
                  value={values.messaggio.value}
                  error={values.messaggio.error}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  required
                  margin="normal"
                />

                <Box sx={{ mb: 3 }}>
                  <Typography variant="overline">Privacy</Typography>
                  <Typography variant="body2" gutterBottom>
                    Accetto di condividere con La Rapida di Davide Di Criscito
                    il mio indirizzo email e comprendo che l'email non verrà
                    utilizzata per altri scopi che non siano quello di essere
                    ricontattato.
                  </Typography>

                  <FormControlLabel
                    label="Ho compreso"
                    onChange={handlePrivacyChange}
                    control={
                      <Checkbox
                        checked={values.privacy.value}
                        value={values.privacy.value}
                        required
                      />
                    }
                  />
                </Box>

                <Button
                  variant="contained"
                  endIcon={<IconSend />}
                  disabled={formError}
                  onClick={handleSubmit}
                >
                  Invia
                </Button>
              </form>

              {response.status && (
                <Alert
                  sx={{ mt: 3 }}
                  severity={+response.status === 200 ? "success" : "error"}
                >
                  {response.statusText}
                </Alert>
              )}
            </Paper>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Contatti;
