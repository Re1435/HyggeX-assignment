import React from 'react'
import HomeIcon from '../assets/home.png'
import RightArrow from '../assets/right-arrow.png'
import Bulb3Icon from '../assets/bulb3-icon.png'
import Sound3Icon from '../assets/sound3-icon.png'
import ReplayIcon from '../assets/replay-icon.png'
import ScreenIcon from '../assets/full-screen-icon.png'
import BgLeftArrow from '../assets/bg-left-arrow.png'
import BgRightArrow from '../assets/bg-right-arrow.png'
import LogoIcon from '../assets/logo-img1.jpeg'
import AddIcon from '../assets/add-icon.png'
import '../App.css'
const MainScreen = () => {
  return (
    <>
      <div className="flex gap-2 m-[16px] ml-[30px]">
        <img src={HomeIcon} alt="home-icon" className="w-5 " />
        <img src={RightArrow} alt="right-arrow" className="w-5" />
        <h5 className="text-gray-400">Flashcard</h5>
        <img src={RightArrow} alt="right-arrow" className="w-5" />
        <h5 className="text-gray-400">Mathematics</h5>
        <img src={RightArrow} alt="right-arrow" className="w-5" />
        <h5 className="text-blue-800 font-medium">Relation and Function</h5>
      </div>
      <h2 className="text-2xl font-semibold text-blue-800 mt-[24px] text-left ml-8">
        Relations and Functions ( Mathematics )
      </h2>
      <div className="flex flex-col justify-center items-center my-5">
        <div className="flex gap-[40px] text-xl font-normal">
          <h5 className="font-medium text-blue-800 underline decoration-blue-800">
            Study
          </h5>
          <h5>Quiz</h5>
          <h5>Test</h5>
          <h5>Game</h5>
          <h5>Others</h5>
        </div>
        <div className="w-[712px] h-[485px] mt-3">
          <div className="w-[100%] h-[80%] rounded-3xl bg-blue-800 py-3">
            <div className="flex justify-between mx-5">
              <img
                src={Bulb3Icon}
                alt="bulb-icon"
                className="w-[24px] text-white "
              />
              <img
                src={Sound3Icon}
                alt="volume-icon"
                className="w-[20px] text-white"
              />
            </div>
            <div className="flex justify-center mt-[120px] items-center  text-white text-3xl font-semibold">
              <h1>9 + 6 + 7x - 2x - 3</h1>
            </div>
          </div>
        </div>
        <div className="flex gap-[140px] mb-3">
          <img src={ReplayIcon} alt="replay-icon" className="w-[40px]" />
          <div className="flex gap-[44px]">
            <img src={BgLeftArrow} alt="bg-left-arrow" className="w-[40px]" />
            <h2 className="text-[22px] font-semibold">01/10</h2>
            <img src={BgRightArrow} alt="bg-right-arrow" className="w-[40px]" />
          </div>
          <img src={ScreenIcon} alt="screen-icon" className="w-[40px]" />
        </div>
      </div>
      <div className="flex justify-between mx-8 my-5">
        <div className="flex gap-3">
          <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-white icon-logo">
            <img src={LogoIcon} alt="logo-icon" className="w-[50px]" />
          </div>
          <div className="flex flex-col gap-0 mt-3">
            <p className="text-[12px] font-semibold text-gray-400">
              Published by
            </p>
            <h2 className="text-[28px] tracking-normal font-medium text-blue-900">
              HyggeX
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-2 mr-4">
          <img src={AddIcon} alt="add-icon" className="w-[50px] h-[50px]" />
          <h3 className="text-[20px] font-semibold tracking-normal text-blue-800">
            Create Flashcard
          </h3>
        </div>
      </div>
    </>
  )
}

export default MainScreen
