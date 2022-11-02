import { Box, Button, Container, Snackbar, Typography  } from "@mui/material";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from '../public/images/logo.png';


const Info = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if(!Kakao.isInitialized()){
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }
  }, [])
  

  const onShareKakaoClick = () => {
    window.Kakao.Share.sendCustom({
      templateId: 85266,
    });
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText("양산 온누리교회 임직식에 초대합니다. (https://onnuri.vercel.app/)");
      handleClick();
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Container>
        <Snackbar
          autoHideDuration={6000}
          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
          open={open}
          onClose={handleClose}
          message="복사 완료!"
        />
        <Typography variant="h5" fontWeight="400" align="center" sx={{mt:3, mb:3}} data-aos="fade-up" fontSize="1.8vh">
          문의전화: 055-386-0091
        </Typography>
        
        <div style={{
          display: "flex",
          justifyContent: "center",
          width:'100%',
        }} data-aos="fade-up"
        data-aos-offset="0">
          <Image src={logo}  align="center" alt="Picture of me" placeholder="blur" />
        </div>
        <Box align="center" sx={{mt: 4}} data-aos="fade-up">
          <Button size="small" variant="outlined" sx={{mr: 2}} color="inherit" onClick={onShareKakaoClick}>카카오톡으로 공유하기</Button>
          <Button size="small" variant="outlined" sx={{ml: 2}} color="inherit" onClick={handleCopyClipBoard}>초대 메시지 복사하기</Button>
        </Box>
        <Container sx={{mt:10}}></Container>
    </Container>
  );
};

export default Info;