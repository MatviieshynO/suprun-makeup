// Components
import SocialMediaLinks from './SocialMediaLinks'

const About = () => {
  return (
    <div className="flex-column sm:flex sm:mt-40 mt-20 justify-around">
      <div className="p-2">
        <img
          src="https://images.unsplash.com/photo-1596205521983-9c372fb3d4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt=""
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
