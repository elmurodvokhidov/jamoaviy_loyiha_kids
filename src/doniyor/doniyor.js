import style from './doniyor.module.css'
import CardsGroup from './CardsGroup'
import img1 from './DoniyorImg/Vector 5.png'
import img2 from './DoniyorImg/Vector 5 (1).png'
import img3 from './DoniyorImg/Rectangle7.png'
import img14 from './DoniyorImg/image 16.png'

function Doniyor() {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={`${style.tepasi}   my-5  ml-3 flex justify-between items-center w-[1200px]`}>
                    <h1 className='text-[40px] text-[#2E5587] font-bold'>Акции</h1>
                    <div className={`${style.button} flex gap-14`}>
                        <button className={`${style.buutonLeft} w-[50px] h-[50px]  flex  justify-center  items-center  rounded-[50%] `}>
                            <img src={img1} alt="" />
                        </button>
                        <button className={`${style.buutonRight} w-[50px] h-[50px]  flex  justify-center  items-center   rounded-[50%]`}>
                            <img src={img2} alt="" />
                        </button>
                    </div>
                </div>


                <CardsGroup />


            </div>
            <div className={`${style.middle} bg-red-400 h-[700px] relative`}>
                <img src={img3} alt="" className='rrrrrrrolp absolute h-[700px]' />

                <div className='absolute flex gap-[200px] justify-around my-[100px]  ml-[100px]'>

                    <div className='flex flex-col justify-center gap-10'>
                        <h1 className='text-white font-bold text-[26px] w-[500px]'>
                            Получите <p className='underline  text-green-500 inline-block'>БЕСПЛАТНО</p> методические рекомендации по применению наборов реагентов «ДиаВетТест»
                        </h1>
                        <p className='text-white w-[350px]'>Для биохимических исследований сыворотки (плазмы) крови животных на автматическом анализаторе</p>
                    </div>
                    <div className=' bg-white w-[600px] py-[30px]  flex flex-col items-center gap-3'>


                        <h1 className='text-[40px] text-[#2E5587]'>Заявка</h1>
                        <p className='text-[16px] w-[400px]'>Заполните Ваши контактные данные и мы отправим «Методические рекомендации»</p>
                        <form action="">
                            <div className='flex flex-col gap-5'>
                                <input type="text" placeholder='Имя' className='pl-[20px]' />
                                <input type="email" placeholder='E-mail' className='pl-[20px]' />
                                <input type="number" placeholder='Телефон' className='pl-[20px]' />
                            </div>
                            <div className='flex justify-between my-[20px]'>
                                <div>
                                    <img src={img14} alt="" className='w-[200px] h-[50px]' />
                                </div>
                                <button className='w-[150px] h-[40px] bg-[#6BB233] text-white rounded-[20px]'>Отправить </button>
                            </div>
                        </form>

                        <p className='w-[400px] text-[10px]'>Нажимая кнопку «Отправить», я даю свое <a href="/" className='text-green-500'>согласие на обработку моих персональных данных</a>, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных</p>
                    </div>
                </div>

            </div>
            <div className={style.top}>
                <div className={`${style.tepasi}   my-5  ml-3 flex justify-between items-center w-[1200px]`}>
                    <h1 className='text-[40px] text-[#2E5587] font-bold'>Новости</h1>
                    <div className={`${style.button} flex gap-14`}>
                        <button className={`${style.buutonLeft} w-[50px] h-[50px]  flex  justify-center  items-center  rounded-[50%] `}>
                            <img src={img1} alt="" />
                        </button>
                        <button className={`${style.buutonRight} w-[50px] h-[50px]  flex  justify-center  items-center   rounded-[50%]`}>
                            <img src={img2} alt="" />
                        </button>
                    </div>
                </div>


                <CardsGroup />


            </div>

        </div>
    )
}

export default Doniyor