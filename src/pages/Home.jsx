import SliderComponent from "../components/SliderComponent";
import IconsProducts from "../components/iconsProducts/IconsProducts";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <SliderComponent/>
    <IconsProducts/>
    <h1>Home</h1>      
    </div>
  )
}
