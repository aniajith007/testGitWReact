import React from 'react'
import Imgg from '../Components/1672861621469.jpg'
import downarrow from '../Components/downarrow1.png'

function PicCard() {
  return (
    <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto my-8 p-6">
    <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: `url(${Imgg})`}}></div>

    <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Swaminathan Giridharan</h3>

        <div class="flex items-center justify-center px-5 py-2 bg-gray-200 dark:bg-gray-700">            
            <img src={downarrow} className="color-white h-10 w-10"/>
        </div>
    </div>
</div>
  )
}

export default PicCard