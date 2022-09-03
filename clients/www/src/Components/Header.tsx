import { Box, Container } from "@mui/material";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Header: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Box sx={{ textAlign: "center", mt: 3, mb: 6 }} {...rest}>
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
};

export default Header;
