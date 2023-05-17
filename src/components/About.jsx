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
        repeat: 5,
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
        duration: 3,
      }
    )
  }, [])
  return (
    <div className=" justify-center sm:flex sm:mt-[80px] mt-16 lg:pt-20 pt-10 about xl:max-h-[580px] xl:overflow-hidden xl:mt-32 xl:p-2">
      {/* mobile version */}
      <div className=" sm:hidden">
        <div className="flex-column p-2 ">
          <div className="text-center ">
            <h2 className="text-[16vw] uppercase leading-[3rem] gsap-02">
              Portfolio
            </h2>
            <h3 className="text-[8vw] uppercase gsap-03">Suprun Karyna</h3>
          </div>
          <div className="text-center pt-2 ">
            <h4 className="text-[6vw] uppercase sm:pt-2 text-pink-700 gsap-04">
              makeup Artist
            </h4>
            <p className="text-[4vw] max-w-[90vw] mx-auto text-start gsap-05">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
              veniam delectus quod aperiam quia rerum ratione accusantium vel
              molestias voluptatibus autem perspiciatis ad tenetur, obcaecati
              voluptas eum animi! Quam, dicta! Cumque quisquam asperiores
              facilis expedita earum sequi qui necessitatibus laudantium
              pariatur.
            </p>
            <div className="flex justify-end pr-5 gsap-06 mb-2">
              <SocialMediaLinks />
            </div>
          </div>
        </div>{' '}
        <div className="flex p-2 shadow-2xl shadow-black rounded-lg gsap-01 justify-center w-full ">
          <img
            className="w-[95%] rounded-lg"
            src="images/about-image.png"
            alt="aboutImage"
          />
        </div>
      </div>
      {/* mobile version */}
      {/* sm md lg xlversion */}
      <div className="sm:flex hidden md:gap-10 xl:w-full xl:flex xl:p-2 xl:justify-center">
        <div className="p-2 shadow-lg shadow-black sm:rounded-lg gsap-01 justify-center w-full xl:w-[35%] xl:flex">
          <img
            className="w-[98%] xl:w-[98%] rounded-lg xl:h-full"
            src="images/about-image.png"
            alt="aboutImage"
          />
        </div>
        <div className="p-2 w-full xl:w-[50%]">
          <h2 className="sm:text-[8vw] xl:text-[6vw] sm:text-center sm:uppercase sm:leading-[5rem] gsap-02">
            Portfolio
          </h2>
          <h3 className="sm:text-[4.8vw] xl:text-[3vw] sm:text-center sm:uppercase gsap-03">
            Suprun Karyna
          </h3>

          <h4 className="sm:text-[3vw] xl:text-[2vw] sm:uppercase sm:pt-2 sm:text-pink-700 sm:pl-4 gsap-04">
            makeup Artist
          </h4>
          <p className="sm:text-[2vw] xl:text-[1.3vw] lg:text-[1.6vw] sm:max-w-[40vw] sm:text-start sm:pl-4 gsap-05">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
            veniam delectus quod aperiam quia rerum ratione accusantium vel
            molestias voluptatibus autem perspiciatis ad tenetur, obcaecati
            voluptas eum animi! Quam, dicta! Cumque quisquam asperiores facilis
            expedita earum sequi qui necessitatibus laudantium pariatur.
          </p>

          <div className="sm:flex sm:justify-end sm:pr-12 sm:pt-4 xl:pr-80 xl:pt-22">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
