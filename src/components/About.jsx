import gsap from 'gsap'
import { useEffect } from 'react'
// Components
import SocialMediaLinks from './SocialMediaLinks'

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.gsap-01',
      {
        
        opacity: 0,
      },
      {
        
        opacity: 1,
        duration: 1,
      }
    )
    gsap.fromTo(
      '.gsap-02',
      {
        
        opacity: 0,
      },
      {
        
        opacity: 1,
        duration: 1,
      }
    )
    gsap.fromTo(
      '.gsap-03',
      {
        
        opacity: 0,
      },
      {
        delay: 1,
        
        opacity: 1,
        duration: 0.5,
      }
    )
    gsap.fromTo(
      '.gsap-04',
      {
        
        opacity: 0,
      },
      {
        delay: 1.5,
        
        opacity: 1,
        duration: 0.5,
      }
    )
    gsap.fromTo(
      '.gsap-05',
      {
       
        opacity: 0,
      },
      {
        delay: 2,
        
        opacity: 1,
        duration: 0.5,
      }
    )
    gsap.fromTo(
      '.gsap-06',
      {
        
        opacity: 0,
      },
      {
        delay: 2.5,
        
        opacity: 1,
        duration: 0.5,
      }
    )
    gsap.fromTo(
      '.gsap-07',
      {
        opacity: 0,
        rotate: -250,
      },

      {
        repeat: -1,
        repeatDelay: 10,
        rotate: 0,

        x: 0,
        opacity: 1,
        duration: 0.7,
      }
    )

    gsap.fromTo(
      '.gsap-08',
      {
        opacity: 0,
      },
      {
        delay: 1,
        x: 0,
        opacity: 1,
        duration: 4,
      }
    )
  }, [])
  return (
    <div className="flex-column sm:flex sm:mt-[90px] mt-20 justify-around pt-10 about">
      <div className="p-2 shadow-2xl shadow-black rounded-lg gsap-01">
        <img
          className="rounded-lg"
          src="images/about-image.png"
          alt="aboutImage"
        />
      </div>
      <div className="flex-column p-2">
        <div className="text-center ">
          <h2 className="text-[8vw] uppercase sm:leading-[5rem] gsap-02">
            Portfolio
          </h2>
          <h3 className="text-[3vw] uppercase gsap-03">Suprun Karyna</h3>
        </div>
        <div className="text-start sm:pt-20 ">
          <h4 className="text-[2.2vw] uppercase pt-2 text-pink-700 gsap-04">
            makeup Artist
          </h4>
          <p className="text-[1.1vw] max-w-[40vw] text-start gsap-05">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
            veniam delectus quod aperiam quia rerum ratione accusantium vel
            molestias voluptatibus autem perspiciatis ad tenetur, obcaecati
            voluptas eum animi! Quam, dicta! Cumque quisquam asperiores facilis
            expedita earum sequi qui necessitatibus laudantium pariatur.
          </p>
          <div className="flex justify-end sm:pt-10 sm:pr-40 pr-5 gsap-06">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
