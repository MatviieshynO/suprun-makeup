import { useState } from 'react'

const ImagesSlider = () => {
  const [offSet, setOffSet] = useState(-600)
  const handleArrowLeftClick = () => {
    setOffSet((currentOffSet) => {
      const newOffSet = currentOffSet - 414
      console.log(newOffSet)
      return newOffSet
    })
  }
  const handleArrowRigthClick = () => {
    setOffSet((currentOffSet) => {
      const newOffSet = currentOffSet + 414

      console.log(newOffSet)
      return newOffSet
    })
  }
  return (
    <div className="h-full w-full flex items-center z-10 overflow-hidden py-6">
      <button
        className="p-4 z-30 text-black text-5xl"
        onClick={handleArrowLeftClick}
      >
        {'<'}
      </button>
      <div className="h-[500px] w-full">
        <div
          className="h-full w-[30%] flex duration-1000"
          style={{ transform: `translateX(${offSet}px)` }}
        >
          <img
            className="min-w-full max-w-full h-full p-2 rounded-2xl"
            src="https://cdn.pixabay.com/photo/2019/12/15/08/14/body-painting-4696539_960_720.jpg"
            alt=""
          />
          <img
            className="min-w-full max-w-full h-full p-2 rounded-2xl"
            src="https://images.unsplash.com/photo-1631248622332-3c49488a8d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
          <img
            className="min-w-full max-w-full h-full p-2 rounded-2xl"
            src="https://images.unsplash.com/photo-1606158436222-1896b18c5d25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <img
            className="min-w-full max-w-full h-full p-2 rounded-2xl"
            src="https://images.unsplash.com/photo-1628619546634-e356cb411b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
          <img
            className="min-w-full max-w-full h-full p-2 rounded-2xl"
            src="https://images.unsplash.com/photo-1605813807548-0f9bd3cf043a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
            alt=""
          />
          <img
            className="min-w-full max-w-full h-full p-2 rounded-2xl"
            src="https://images.unsplash.com/photo-1601599009979-f85c21cbd703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
            alt=""
          />
        </div>
      </div>
      <button
        className="z-20 text-black text-5xl"
        onClick={handleArrowRigthClick}
      >
        {'>'}
      </button>
    </div>
  )
}

export default ImagesSlider
