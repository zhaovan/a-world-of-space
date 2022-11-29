import "../styles/globals.css";
import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: [
    {
      path: "./fonts/PixeloidSans.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PixeloidSansBold.ttf",
      weight: "bold",
      style: "normal",
    },
  ],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
