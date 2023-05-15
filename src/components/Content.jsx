import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Content = () => {
  useEffect(() => {
    gsap.to('.image-content', {
      scrollTrigger: {
        trigger: '.image-content',
        markers: false,
        start: 'top bottom',
        scrub: true,
      },

      x: -100,
    })
    gsap.to('.image-content-2', {
      scrollTrigger: {
        trigger: '.content',
        markers: false,
        start: 'center bottom',
        scrub: true,
      },

      x: 100,
    })
  }, [])
  return (
    <div className="content">
      <div className="flex-column sm:flex justify-around">
        <div className="flex-column p-2">
          <div className="sm:pt-20 text-content">
            <h4 className="text-[2.2vw] uppercase py-4 text-center pt-20 text-pink-700">
              Lorem ipsum dolor sit amet.
            </h4>
            <p className="text-[1.1vw] max-w-[40vw] text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
              expedita earum sequi qui necessitatibus laudantium pariatur.
            </p>
          </div>
        </div>
        <div className="p-2 shadow-2xl shadow-black rounded-lg image-content">
          <img className="rounded-lg " src="images/content-image.png" alt="" />
        </div>
      </div>
      <div className="flex-column sm:flex justify-around">
        <div className="p-2 shadow-2xl shadow-black rounded-lg image-content-2">
          <img
            className="rounded-lg "
            src="images/content-image-2.png"
            alt=""
          />
        </div>
        <div className="flex-column p-2">
          <div className="sm:pt-20">
            <h4 className="text-[2.2vw] uppercase py-4 text-center pt-20 text-pink-700">
              Lorem ipsum dolor sit amet.
            </h4>
            <p className="text-[1.1vw] max-w-[40vw] text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
              expedita earum sequi qui necessitatibus laudantium pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
