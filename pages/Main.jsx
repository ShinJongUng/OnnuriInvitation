import { Box, Container, Typography,Divider   } from "@mui/material";
import Image from "next/image"
import invitePic from '../public/images/invite.png';
import "aos/dist/aos.css";


const Main = () => {
  return (
    <Container>
        <div style={{
          display: "flex",
          justifyContent: "center",
        }} data-aos="fade-zoom-in"
        data-aos-offset="0">
          <Image src={invitePic} width={800} height={800}  priority align="center" alt="Picture of me" placeholder="blur"/>
        </div>
        <Typography variant="h5" fontWeight="500" align="center" sx={{mt:5 }} data-aos="fade-up" fontSize="3vh">
          양산 <b>온누리 교회</b> <br/>
          임직 예배에 초대합니다
        </Typography>

        <Typography variant="h6" fontWeight="300" align="center" sx={{mt:2, mb:4 }} data-aos="fade-up" fontSize="2.3vh">
          장로 · 안수집사 · 권사 · 여집사 임직식
        </Typography>
        <Divider  data-aos="fade-up"/>
    </Container>
  );
};

export default Main;