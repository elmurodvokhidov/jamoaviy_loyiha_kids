import style from './aliakbar.module.css'
import img from './img/Rectangle 33.png'
import img1 from "./img/Rectangle 33 (1).png"
import img2 from "./img/Rectangle 33 (2).png"
import span from "./img/Group 1076.png"
import logo from "./img/Rectangle 19.png"
import logo1 from "./img/Rectangle 20.png"
import logo2 from "./img/Rectangle 21.png"
import logo3 from "./img/Rectangle 22.png"
import logo4 from "./img/Rectangle 23.png"
import logo5 from "./img/Rectangle 24.png"
import rasm from "./img/Component 70.png"
import picture from "./img/Ellipse 8.png"
import tirnoq from "./img/Group 62.png"
import sayt from "./img/Group 1221.png"
import lg from "./img/image 20.png"
import sms from "./img/Group 1083.png"
import insta from "./img/Group 87.png"

function Aliakbar() {
  return (
    <div className={style.box}>
      <div className="justify-center text-center bg-sky-100">
        <div className='flex text-center justify-center gap-[1150px] py-10'>
          <h1 className='text-5xl font-bold text-blue-950'>Видео</h1>
          <img src={span} alt="" />
        </div>
        <div className="justify-center text-center flex gap-10 pb-28">
          <div className={style.card}>
            <img src={img} alt="" />
            <p className='text-xl font-semibold pt-6 pb-16'>Участие в Национальной Ветеринарной <br /> Конференции</p>
          </div>
          <div className={style.card}>
            <img src={img1} alt="" />
            <p className='text-xl font-semibold pt-6 pb-16'>Основы использования биохимического <br /> анализатора Skyla VB1</p>
          </div>
          <div className={style.card}>
            <img src={img2} alt="" />
            <p className='text-xl font-semibold pt-6 pb-16'>Пуско-наладка 5-diff гематологического <br /> анализатора DF-50</p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-center text-center gap-60 py-14'>
          <h1 className='text-5xl font-bold text-blue-950'>Бренды</h1>
          <h3 className='text-xl font-medium'>У нас Вы можете купить ветеринарное оборудование ведущих <br />
            производителей из Китая, Южной Кореи, Испании и т.д.</h3>
          <img src={span} alt="" />
        </div>
        <div>
          <div className='flex justify-center text-center'>
            <img className={style.png} src={logo} alt="" />
            <img className={style.png} src={logo1} alt="" />
            <img className={style.png} src={logo2} alt="" />
            <img className={style.png} src={logo3} alt="" />
            <img className={style.png} src={logo4} alt="" />
            <img className={style.png} src={logo5} alt="" />
          </div>
        </div>
      </div>
      <div className='justify-center text-center bg-green-500 py-20'>
        <h1 className='text-4xl text-white font-semibold'>Сотрудничая с нами, Вы получаете</h1>
        <div className='flex justify-center py-10 gap-44'>
          <div>
            <img className='pl-6' src={rasm} alt="" />
            <h2 className='text-xl font-semibold text-white pt-3'>Индивидуальный <br /> подход</h2>
            <h3 className='text-white font-extralight'>к каждому заказчику</h3>
          </div>
          <div>
            <img className='pl-7' src={rasm} alt="" />
            <h2 className='text-xl font-semibold text-white pt-3'>Индивидуальный <br /> подход</h2>
            <h3 className='text-white font-extralight'>к каждому заказчику</h3>
          </div>
          <div>
            <img className='pl-7' src={rasm} alt="" />
            <h2 className='text-xl font-semibold text-white pt-3'>Индивидуальный <br /> подход</h2>
            <h3 className='text-white font-extralight'>к каждому заказчику</h3>
          </div>
          <div>
            <img className='pl-7' src={rasm} alt="" />
            <h2 className='text-xl font-semibold text-white pt-3'>Индивидуальный <br /> подход</h2>
            <h3 className='text-white font-extralight'>к каждому заказчику</h3>
          </div>
        </div>
      </div>
      <div className='justify-center text-center'>
        <div className='justify-center gap-96 text-center flex py-20'>
          <h1 className='text-5xl font-bold text-blue-950 pr-32'>Рекомендации и благодарности</h1>
          <img src={span} alt="" />
        </div>
        <div className='justify-center gap-16 py-14 border-[1px] text-center flex '>
          <div className='pl-5'>
            <img src={picture} alt="" />
            <h2 className='pt-5 mr-20 text-xl font-semibold text-black'>Истомина Т. А.</h2>
            <h2 className='mr-12 pt-2 text-blue-600 '>Клиника “Белый клык”</h2>
          </div>
          <img className='h-10' src={tirnoq} alt="" />
          <div className=''>
            Анализатор электролитов i-Smart 30 Vet находился на апробации в ветеринарной клинике <br />
            “Белвй клык” с 15 апреля по 15 мая 2015 года. За время апробации проявил себя как <br />
            надежный и удобный в использовании анализатор. Прибор не требует для работы <br />
            специальных навыков от оператора и может быть успешно использован сотрудником <br />
            ветеринарной лаборатории или клиники после прохождения краткого обучения. <br />
            Во время анализа на экране отображаютя подсказки для пользователя. <br />
            Также к достоинствам данного анализатора относится быстрое получение результатов <br />
            исследования (35 сек), портативность прибора и удобство работы. <br />
          </div>
        </div>
      </div>
      <div className='justify-center text-center mt-28  bg-blue-100'>
        <div className='justify-center gap-[900px] text-center flex py-20'>
          <h1 className='text-5xl font-bold text-blue-950'>Наши клиенты</h1>
          <img src={span} alt="" />
        </div>
        <div className='justify-center text-center flex'>
          <img src={sayt} alt="" />
        </div>
      </div>
      <div className='justify-center text-center flex bg-blue-700 py-12 gap-10'>
        <div className='text-white font-light'>
          <h1>Logo</h1>
          <h2>OOO “ДИАКОН-ВЕТ”</h2>
          <img className='pl-28 py-5' src={lg} alt="" />
          <h4>ООО «ДИАКОН-ВЕТ»: ветеринарное оборудование <br /> и приборы,
            диагностические <br /> реагенты для лабораторий и <br /> клиник</h4>
          <h4 className='pt-3'>Компания осуществляет свою <br /> работу по упрощенной <br /> системе налогообложения <br />
            (УСН) в соответствии со ст. <br /> 346.12 НК РФ</h4>
          <h4 className='text-yellow-500 pt-4'>Политика обработки <br /> персональных данных</h4>
          <h4 className='text-yellow-500'>Положение об <br /> антикоррупционной политике</h4>
        </div>
        <div className='text-white pt-14'>
          <h1 className='text-xl font-bold'>Реагенты</h1>
          <h3 className='pt-5'>Реагенты для биохимических анализаторов</h3>
          <h3>Реагенты для биохимических </h3>
          <h3>Реагенты для биохclassName='text-xl font-bold'имических анализ</h3>
          <h3>Реагенты для биохимических </h3>
          <h3>Реагенты для био анализаторов</h3>
          <h3>Реагенты для биохимических анализаторов</h3>
          <h3>Dymind</h3>
          <h3>Реагенты </h3>
        </div>
        <div className='text-white pt-14'>
          <h1 className='text-xl font-bold'>Реагенты</h1>
          <h3 className='pt-5'>Реагенты для биохимических анализаторов</h3>
          <h3>Реагенты для биохимических </h3>
          <h3>Реагенты для биохимических анализ</h3>
          <h3>Реагенты для биохимических </h3>
          <h3>Реагенты для био анализаторов</h3>
          <h3>Реагенты для биохимических анализаторов</h3>
          <h3>Dymind</h3>
          <h3>Реагенты </h3>
          <h3>Реагенты для био анализаторов</h3>
          <h3>Dymind</h3>
        </div>
        <div className='text-white pt-14'>
          <div className='text-xl font-bold'>
            <h1>Реагенты</h1>
            <h1 className='pt-5'>Статьи</h1>
            <h1 className='pt-3'>Сервис</h1>
            <h1 className='pt-3'>Акции</h1>
            <h1 className='pt-3'>Доставка и оплата</h1>
            <h1 className='pt-3'>Дилерам</h1>
            <h1 className='pt-3'>РНовости</h1>
            <h1 className='pt-3'>Видео</h1>
            <h1 className='pt-3'>Контакты</h1>
          </div>
        </div>
        <div className='text-white pt-14'>
          <h1 className='text-xl font-bold'>+7 (499) 372-24-62</h1>
          <h1 className='text-xl font-bold'>+7 (499) 372-24-62</h1>
          <h1 className='flex pl-10 pt-4 gap-3'><img src={sms} alt="" />info@diakonvet.ru</h1>
          <h1 className='flex pl-10 pt-2 gap-3'><img src={insta} alt="" />@diakonvet</h1>
          <h1 className='pt-5 pl-10'>Московская область, г. Пущино, <br />
            улица Грузовая, 1А, 142290</h1>
            <button className='w-56 mt-8 h-14 bg-green-600 rounded-full'>Заказать консультацию</button>
        </div>
      </div>
    </div>

  )
}

export default Aliakbar