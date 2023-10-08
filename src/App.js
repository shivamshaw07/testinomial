import { useState } from 'react';
import './App.css';
import reviews from './data';
import Card from './components/Card';




function App() {
  const [current,setCurrent] = useState(0)
  return (
    <div className="h-[100vh] w-[vw] flex flex-col items-center justify-center bg-[#d8d8f4] p-6">
      <div className='m-5 flex flex-col mb-[8vh] items-center'>
      <h1 className='font-bold text-3xl'>Our Testinomials</h1>
      <div className='w-[7rem] h-1 rounded-2xl mt-1  bg-[#4343a4]'></div>
      </div>
      <Card reviews = {reviews} current = {current} setCurrent = {setCurrent}/>
    </div>
  );
}

export default App;
