import { useState } from 'react'
import {
  TbSquareRoundedArrowLeftFilled,
  TbSquareRoundedArrowRightFilled,
} from 'react-icons/tb'

const ImagesSlider = () => {
  const [offSet, setOffSet] = useState(-759)
  const handleArrowLeftClick = () => {
    setOffSet((currentOffSet) => {
      let newOffSet = currentOffSet - 334
      if (offSet < -1000) {
        newOffSet = -71
        return newOffSet
      }
      return newOffSet
      // return Math.max(newOffSet, -670)
    })
  }
  const handleArrowRigthClick = () => {
    setOffSet((currentOffSet) => {
      let newOffSet = currentOffSet + 334
      if (offSet > -80) {
        newOffSet = -1080
        return newOffSet
      }
      return newOffSet
    })
  }
  return (
    <div className="h-full w-full flex items-center z-10 overflow-hidden py-6 xl:mt-10">
      <button
        className="ml-2 z-10 text-black sm:text-4xl text-3xl"
        onClick={handleArrowLeftClick}
      >
        <TbSquareRoundedArrowLeftFilled className="text-white" />
      </button>
      <div className=" xl:h-[500px] w-full sm:w-[90%]">
        <div
          className="xl:h-full xl:w-[30%] w-[78%] sm:w-[44%] lg:w-[33%] h-full flex duration-1000"
          style={{ transform: `translateX(${offSet}px)` }}
        >
          <img
            className="min-w-full max-w-full h-full p-2 rounded-2xl shadow-2xl shadow-black mx-2"
            src="images/slider-1.png"
            alt=""
          />
          <img
            className="min-w-full max-w-full h-full p-2 rounded-2xl shadow-2xl shadow-black mx-2"
            src="images/slider-2.png"
            alt=""
          />
          <img
            className="min-w-full max-w-full h-full p-2 rounded-2xl shadow-2xl shadow-black mx-2"
            src="images/slider-3.png"
            alt=""
          />
          <img
            className="min-w-full max-w-full h-full p-2 rounded-2xl shadow-2xl shadow-black mx-2"
            src="images/slider-4.png"
            alt=""
          />
          <img
            className="min-w-full max-w-full h-full p-2 rounded-2xl shadow-2xl shadow-black mx-2"
            src="images/slider-5.png"
            alt=""
          />
          <img
            className="min-w-full max-w-full h-full p-2 rounded-2xl shadow-2xl shadow-black mx-2"
            src="images/slider-6.png"
            alt=""
          />
        </div>
      </div>
      <button
        className="mr-2 z-10 text-black sm:text-4xl text-3xl"
        onClick={handleArrowRigthClick}
      >
        <TbSquareRoundedArrowRightFilled className="text-white" />
      </button>
    </div>
  )
}

export default ImagesSlider
