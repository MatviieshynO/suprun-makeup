// Components
import SocialMediaLinks from './SocialMediaLinks'

const About = () => {
  return (
    <div className="flex-column sm:flex sm:mt-[90px] mt-20 justify-around pt-10">
      <div className="p-2 shadow-2xl shadow-black rounded-lg">
        <img
          className="rounded-lg"
          src="images/about-image.png"
          alt="aboutImage"
        />
      </div>
      <div className="flex-column p-2">
        <div className="text-center">
          <h2 className="text-[8vw] uppercase sm:leading-[5rem] ">Portfolio</h2>
          <h3 className="text-[3vw] uppercase">Suprun Karyna</h3>
        </div>
        <div className="text-start sm:pt-20 ">
          <h4 className="text-[2.2vw] uppercase pt-2">makeup Artist</h4>
          <p className="text-[1.1vw] max-w-[40vw] text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            labore quisquam suscipit, quibusdam ea id quo temporibus doloribus
            veniam delectus quod aperiam quia rerum ratione accusantium vel
            molestias voluptatibus autem perspiciatis ad tenetur, obcaecati
            voluptas eum animi! Quam, dicta! Cumque quisquam asperiores facilis
            expedita earum sequi qui necessitatibus laudantium pariatur.
          </p>
          <div className="flex justify-end sm:pt-10 sm:pr-40 pr-5">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
