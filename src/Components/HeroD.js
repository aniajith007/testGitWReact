import React from 'react'
import Imgg from '../Components/1672861621469.jpg'
import Footer from './Footer'
import PicCard from './PicCard'
function HeroD() {
  return (    
    
    <div className="container min-h-screen flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center" id = "Hero">
      <PicCard/>
        <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
            <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">Hello there!!</h1>
            </div>
        </div>    
    </div>    
    
  )
}

export default HeroD