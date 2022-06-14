import { Box, Container } from "@mui/material";

export default function Header({ children, ...rest }) {
  return (
    <Box sx={{ textAlign: "center", mt: 3, mb: 6 }} {...rest}>
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
}
