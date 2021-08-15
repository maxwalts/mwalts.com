import '../styles/globals.css'
import ReactGA from 'react-ga';


const TRACKING_ID = "G-M41KT7LJQL";
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
