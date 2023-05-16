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
    <div className="fixed bottom-[-25px] right-[43%] lg:bottom-14 lg:right-2 text-6xl z-100">
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
