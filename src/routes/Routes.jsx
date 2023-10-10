import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
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
  }
]);
