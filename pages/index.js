import { Container, useMediaQuery, useTheme  } from "@mui/material";
import InviteMsg from "./InviteMsg";
import Main from "./Main";
import AOS from "aos";
import { useEffect } from "react";
import Place from "./Place";
import PersonList from "./PersonList";
import Info from "./Info";
import ScrollToTop from "./ScrollToTop";


const Home = () => {
  const theme = useTheme();
  useEffect(() => {
    AOS.init({
        duration : 2000,
        once: true,
    });
});
  return (
    <Container maxWidth="md" disableGutters={useMediaQuery(theme.breakpoints.only('xs'))}>
      <ScrollToTop/>
      <Main/>
      <InviteMsg/>
      <Place/>
      <PersonList/>
      <Info/>
    </Container>
  );
};

export default Home;