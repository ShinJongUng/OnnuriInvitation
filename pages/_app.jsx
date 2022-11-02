import { ThemeProvider, createTheme } from '@mui/material/styles'
import Script from "next/script"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_KEY}&libraries=services,clusterer&autoload=false`}
        strategy="beforeInteractive"
      />
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

const theme = createTheme({
  typography:{
      fontFamily: 'Pretendard'
  }
})


export default MyApp
