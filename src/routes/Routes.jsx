import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Paniales from "../pages/Paniales";
export const router = createBrowserRouter(
  [
  {
    path: '/',
    element: <Home />,
    errorElement: <Home/>
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/pañales',
    element: <Paniales/>
  }
]);
