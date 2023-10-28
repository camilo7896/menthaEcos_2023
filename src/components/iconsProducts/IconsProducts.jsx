import { Link } from 'react-router-dom';
import Style from './iconsProducts.module.css';
export default function IconsProducts() {
    return (
        <>
            <div className={Style.cont}>
                <div className={Style.contImg}>
                    <Link to={'/pañales'}>
                    <img className={Style.imgIcon} src="../../../public/pañalIcon.png" alt='Pañales para bebés'/>
                    </Link>
                    <small>Pañales</small>
                </div>
                <div className={Style.contImg}>
                    <img className={Style.imgIcon} src="../../../public/pañalIcon.png" alt='Pañales para bebés'/>
                    <small>Mujer</small>
                </div>
                <div className={Style.contImg}>
                    <img className={Style.imgIcon} src="../../../public/pañalIcon.png" alt='Pañales para bebés'/>
                    <small>Ropita</small>
                </div>
            </div>
        </>
    )
}
