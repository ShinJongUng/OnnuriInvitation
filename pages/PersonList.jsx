import { Container, Typography, ImageList, ImageListItem, ImageListItemBar, Chip } from "@mui/material";
import "aos/dist/aos.css";
import { c_ordainedDeaconData, c_seniorDeaconessData, deaconessData, elderData, ordainedDeaconData, seniorDeaconessData } from "../PersonData/name";
import Image from "next/image";



const PersonList = () => {
  return (
    <Container>
        <Typography variant="h5" fontWeight="500" align="center" sx={{mt:10 }} data-aos="fade-up" fontSize="2.7vh">
          임직자 명단
        </Typography>
        <Chip label="장로임직" size="medium" data-aos="fade-up" sx={{mt:3 }}/>
        <ImageList data-aos="fade-up" cols={3} gap={10}>
          {elderData.map((item) => (
            <ImageListItem key={item.name}>
              <Image
                width={"100em"}
                height={"130em"}
                style={{background: "#ffffff"}}
                quality={50}
                objectFit="contain"
                objectPosition="center"
                src={`${item.img}`}
                alt={item.title}
                priority
              />
              <ImageListItemBar
                title={item.name}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
        
        <Chip label="안수집사취임" size="medium" data-aos="fade-up" sx={{mt:3 }}/>
        <ImageList data-aos="fade-up" cols={4} gap={10}>
          {c_ordainedDeaconData.map((item) => (
            <ImageListItem key={item.name}>
              <Image
                width={"100em"}
                height={"130em"}
                style={{background: "#ffffff"}}
                quality={50}
                objectFit="contain"
                objectPosition="center"
                src={`${item.img}`}
                alt={item.title}
                priority
              />
              <ImageListItemBar
                title={item.name}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Chip label="권사취임" size="medium" data-aos="fade-up" sx={{mt:3 }}/>
        <ImageList data-aos="fade-up" cols={4} gap={10}>
          {c_seniorDeaconessData.map((item) => (
            <ImageListItem key={item.name}>
              <Image
                width={"100em"}
                height={"130em"}
                style={{background: "#ffffff"}}
                quality={50}
                objectFit="contain"
                objectPosition="center"
                src={`${item.img}`}
                alt={item.title}
                priority
              />
              <ImageListItemBar
                title={item.name}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
              
        <Chip label="안수집사임직" size="medium" data-aos="fade-up" sx={{mt:3 }}/>
        <ImageList data-aos="fade-up" cols={4} gap={10}>
          {ordainedDeaconData.map((item) => (
            <ImageListItem key={item.name}>
              <Image
                width={"100em"}
                height={"130em"}
                style={{background: "#ffffff"}}
                quality={50}
                objectFit="contain"
                objectPosition="center"
                src={`${item.img}`}
                alt={item.title}
                priority
              />
              <ImageListItemBar
                title={item.name}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Chip label="권사임직" size="medium" data-aos="fade-up" sx={{mt:3 }}/>
        <ImageList data-aos="fade-up" cols={4} gap={10}>
          {seniorDeaconessData.map((item) => (
            <ImageListItem key={item.name}>
              <Image
                width={"100em"}
                height={"130em"}
                style={{background: "#ffffff"}}
                quality={50}
                objectFit="contain"
                objectPosition="center"
                src={`${item.img}`}
                alt={item.title}
                priority
              />
              <ImageListItemBar
                title={item.name}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Chip label="여집사임직" size="medium" data-aos="fade-up" sx={{mt:3 }}/>
        <ImageList data-aos="fade-up" cols={4} gap={10}>
          {deaconessData.map((item, i) => (
            <ImageListItem key={i}>
              <Image
                width={"100em"}
                height={"130em"}
                style={{background: "#ffffff"}}
                quality={50}
                objectFit="contain"
                objectPosition="center"
                src={`${item.img}`}
                alt={item.title}
                priority
              />
              <ImageListItemBar
                title={item.name}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
    </Container>
  );
};

export default PersonList;