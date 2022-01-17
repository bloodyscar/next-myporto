import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    

    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

  }, []);
  return <Component {...pageProps} />
}

export default MyApp
