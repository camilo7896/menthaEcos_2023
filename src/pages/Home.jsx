import CardHomeComponent from "../components/CardHomeComponent";
import Cardfootercomponent from "../components/Cardfootercomponent";
import GaleriahorizontalComponent from "../components/GaleriahorizontalComponent";
import SliderComponent from "../components/SliderComponent";
import IconsProducts from "../components/iconsProducts/IconsProducts";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <SliderComponent/>
    <IconsProducts/>
    <CardHomeComponent/>
    <Cardfootercomponent/>
    <div className="container">
    <GaleriahorizontalComponent/>
    </div>
    </div>
  )
}
