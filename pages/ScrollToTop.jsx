import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Fab } from "@mui/material";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [toggleBtn, setToggleBtn] = useState(true);
    const handleScroll = () => {
        const { scrollY } = window;
        scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

  return toggleBtn && (
    <Fab variant="extended" sx={{position:"fixed", bottom: 20, right:5}} onClick={goToTop}>
        <ArrowUpwardIcon fontSize='small'/>
    </Fab>
  )
};

export default ScrollToTop;