import { Container, Typography  } from "@mui/material";
import "aos/dist/aos.css";


const InviteMsg = () => {
  return (
    <Container>
        <Typography variant="h5" fontWeight="500" align="center" sx={{mt:6 }} data-aos="fade-up" fontSize="2.7vh">
          초대의 글
        </Typography>

        <Typography variant="h6" fontWeight="300" align="center" sx={{mt:2 }} data-aos="fade-up" fontSize="2vh">
        하나님의 크신 은혜와 평강이<br/>
        섬기시는 교회와 가정 위에 늘 충만 하기를 원합니다. <br/>
        금번 양산 온누리교회에서 장로, 안수집사, 권사, 여집사 <br/>
        임직식을 거행 하고자 하오니<br/>
        오셔서 축복해 주시고 격려해 주시면 감사하겠습니다.<br/>
        </Typography>
        <Typography variant="h6" fontWeight="300" align="center" sx={{mt:2 }} data-aos="fade-up" fontSize="1.8vh">
        양산 온누리교회 담임목사 <b>허남길</b> 
        </Typography>
    </Container>
  );
};

export default InviteMsg;