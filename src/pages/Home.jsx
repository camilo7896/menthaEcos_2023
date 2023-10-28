import CardHomeComponent from "../components/CardHomeComponent";
import Cardfootercomponent from "../components/Cardfootercomponent";
import SliderComponent from "../components/SliderComponent";
import IconsProducts from "../components/iconsProducts/IconsProducts";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <SliderComponent />
      <div className="container-fluid">
        <IconsProducts />
        <CardHomeComponent />
        <Cardfootercomponent />
      </div>
    </div>
  )
}
