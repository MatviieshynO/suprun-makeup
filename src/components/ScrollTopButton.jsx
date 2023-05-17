import { useState, useEffect } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const ScrollTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    })
  }, [])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="fixed bottom-[-30px] sm:right-[44%] right-[41%] lg:bottom-14 lg:right-2 xl:right-6 sm:text-6xl text-6xl z-50">
      {showScrollButton && (
        <BsFillArrowUpCircleFill
          className="cursor-pointer bg-incherit text-pink-700 hover:text-pink-600"
          onClick={scrollToTop}
        />
      )}
    </div>
  )
}

export default ScrollTopButton
