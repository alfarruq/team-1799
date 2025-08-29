
import './index.css'
import hero from "../../assets/hero.png"


function SectionOne() {
    return ( 
        <>
            <div className="section_one">
                <div className="section_one_left">
                    <h1>Управление запасами розничного магазина</h1>
                    <p>Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
                    <button>Заказать демонстрацию</button>
                </div>
                <div className="section_one_right">
                    <img src={hero} alt="" />
                </div>
            </div>
        </>
     );
}

export default SectionOne;


