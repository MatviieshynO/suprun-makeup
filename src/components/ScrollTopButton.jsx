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
    <div className="fixed sm:bottom-[10%] sm:right-[1%] md:bottom-[10%] md:right-[1%] bottom-[-9px] right-[45%] text-6xl z-100">
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
