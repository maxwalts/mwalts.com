import '../styles/globals.css'
import ReactGA from 'react-ga';


const TRACKING_ID = "UA-12341234-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
