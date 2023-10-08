import React from 'react'
import {FcNext} from 'react-icons/fc';
import {FcPrevious} from 'react-icons/fc';
import {BiSolidQuoteAltLeft} from 'react-icons/bi'
import {BiSolidQuoteAltRight} from 'react-icons/bi'

const Card = (props) => {
    const current = props.current;
    const reviews = props.reviews
    const setCurrent = props.setCurrent;

    const currentHanlderPrev =() =>{
        if(current == 0){
            setCurrent(5)
        }
        else{
            setCurrent(current-1)
        }
        console.log(current)
    }
    const currentHanlderNext =() =>{
        if(current == 5){
            setCurrent(0)
        }else{
            setCurrent(current+1)
        }
        console.log(current)
    }
  return (
    <div className='relative w-[70vw] lg:w-[40vw] h-auto gap-4 bg-white shadow-2xl flex flex-col items-center justify-center py-8 px-5 rounded-md'>
      <div className='lg:absolute top-[-4rem] h-[17vh] left-4'>
        <img src={reviews[current].image} alt="hola" className='h-[100%] rounded-full z-30 relative'/>
        <div className='w-[7rem] h-[7rem] lg:block hidden absolute rounded-full bg-[#4343a4] top-[-.2rem] left-1 z-0'></div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-lg'>{reviews[current].name}</h1>
        <p className='text-xs text-gray-600 uppercase'>{reviews[current].job}</p>
      </div>
      <div className=''><BiSolidQuoteAltLeft/></div>
      <p className='text-xs text-[#6b6b6b]'>{reviews[current].text}</p>
      <div className=''><BiSolidQuoteAltRight/></div>
      <div className='flex gap-3'>
        <button onClick={currentHanlderPrev}><FcPrevious/></button>
        <button onClick={currentHanlderNext}><FcNext/></button>
      </div>
      <button className='py-2 px-4 bg-[#4343a4] font-semibold rounded-md'>Surprise me</button>
    </div>
  )
}

export default Card
