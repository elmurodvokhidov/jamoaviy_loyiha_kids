import React from 'react'
import { useState } from 'react'
import img from './DoniyorImg/Rectangle 13.png'
import img1 from './DoniyorImg/Rectangle 14.png'
import img2 from './DoniyorImg/Rectangle 15.png'
import img3 from './DoniyorImg/Rectangle 16.png'


function CardsGroup() {

let [cards]=useState([
    {
        rasmi:img,
        nomi:'XXIX Московский Международный Ветеринарный Конгресс'
    },
    {
        rasmi:img1,
        nomi:'Программа повышения квалификации “Биохимические исследования”'
    },
    {
        rasmi:img2,
        nomi:'Семинар “Современные подходы в лабораторной  диагностике”'
    },
    {
        rasmi:img3,
        nomi:'Выставка ЗООИНДУСТРИЯ 2021'
    }

])



  return (
    <div className='flex'>
     {
        cards.map( (card,index)=>{
            return(
            <div key={index}>
                  <img src={card.rasmi} alt="" className='w-[300px]' />
                  <h1 className='font-bold text-[18px] w-[300px] ml-[20px] my-[10px]'>{card.nomi}</h1>
            </div>
            )
        })
     }



    </div>
  )
}

export default CardsGroup