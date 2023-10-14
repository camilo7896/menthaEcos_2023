import Style from './iconsProducts.module.css';
export default function IconsProducts() {
    return (
        <>
            <div className={Style.cont}>
                <div className={Style.contImg}>
                    <img className={Style.imgIcon} src="../../../public/images/icono pañal.png" alt='Pañales para bebés'/>
                    <small>Pañales</small>
                </div>
                {/* <div className={Style.contImg}>
                    <img className={Style.imgIcon} src="../../../public/images/logoCaballo.jpg" alt='Pañales para bebés'/>
                    <small>Mujer</small>
                </div> */}
                <div className={Style.contImg}>
                    <img className={Style.imgIcon} src="../../../public/images/ropita.png" alt='Pañales para bebés'/>
                    <small>Ropita</small>
                </div>
            </div>
        </>
    )
}
