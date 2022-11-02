import { Container, Typography  } from "@mui/material";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import "aos/dist/aos.css";


const Place = () => {
  return (
    <Container maxWidth={false} >
        <Typography variant="h5" fontWeight="500" align="center" sx={{mt:10 }} data-aos="fade-up" fontSize="2.7vh">
          일시 및 장소
        </Typography>

        <Typography variant="h6" fontWeight="400" align="center" sx={{mt:2 }} data-aos="fade-up" fontSize="2vh">
        2022.12.04 (주일) 오후 5:00
        </Typography>
        <Typography variant="h6" fontWeight="300" align="center" data-aos="fade-up" fontSize="1.7vh">
        양산 온누리교회 3층 본당
        </Typography>
        <Typography variant="h6" fontWeight="200" align="center" data-aos="fade-up" fontSize="1.3vh">
        경상남도 양산시 물금읍 신주로 11
        </Typography>
        <Container sx={{mt:5}} maxWidth={false} disableGutters data-aos="fade-up">
            <Map
                center={{ lat: 35.3353128, lng: 129.0141708 }}
                style={{ width: "100%", height: "360px" }}
                >
                <MapMarker position={{ lat: 35.3353128, lng: 129.0141708 }}/>
            </Map>
        </Container>
    </Container>
  );
};

export default Place;