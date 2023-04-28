import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/routes";
import { Toaster } from "react-hot-toast";
import hero from './images/hero.png';
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <div>
      <ScrollToTop
        smooth
        color="white"
        width="40"
        position="relative"
        style={{
          backgroundColor: "black",
          borderRadius: "50%",
          zIndex: "1000000",
        }}
        top="600"
      />
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
        <div className="hero-container w-full h-[80vh] md:h-[100vh] fixed -z-40">
          <img
            src={hero}
            className="w-2/3  md:w-full md:m-5 spin-animation2 mx-auto"
            alt="hero food"
          />
        </div>
    </div>
  );
}

export default App;
