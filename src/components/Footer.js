import React from 'react'
import DownArrow from '../assets/down-arrow.png'

const Footer = () => {
  return (
    <div className="mx-5 mt-[120px]">
      <h1 className="ml-8 text-[35px] font-bold text-left text-blue-900 tracking-normal">
        FAQ
      </h1>
      <div className="w-[850px] h-[240px] flex flex-col gap-[32px] ml-8 mt-6">
        <div className="flex justify-between items-center w-[100%] h-[58px] rounded-xl border-[1px] border-blue-800">
          <p className="text-[16px] font-semibold top-[23px] left-[24px] ml-4">
            Can education flashcards be used for all age groups?
          </p>
          <img
            src={DownArrow}
            alt="down-arrow"
            className="w-[25px] h-[25px] mr-4"
          />
        </div>
        <div className="flex justify-between items-center w-[100%] h-[58px] rounded-xl border-[1px] border-blue-800">
          <p className="text-[16px] font-semibold top-[23px] left-[24px] ml-4">
            How do education flashcards work?
          </p>
          <img
            src={DownArrow}
            alt="down-arrow"
            className="w-[25px] h-[25px] mr-4"
          />
        </div>
        <div className="flex justify-between items-center w-[100%] h-[58px] rounded-xl border-[1px] border-blue-800">
          <p className="text-[16px] font-semibold top-[23px] left-[24px] ml-4">
            Can education flashcards be used for test preparation?
          </p>
          <img
            src={DownArrow}
            alt="down-arrow"
            className="w-[25px] h-[25px] mr-4"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
