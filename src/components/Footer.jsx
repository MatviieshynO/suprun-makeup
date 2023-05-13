//Components
import SocialMediaLinks from './SocialMediaLinks'
const Footer = () => {
  return (
    <div className="bg-[#4e4e4e] text-white">
      <div className="flex justify-center bg-[#7b7a7a] p-2">
        <SocialMediaLinks />
      </div>
      <ul className="flex justify-center gap-4  uppercase p-4 m-2 text-[1.4vw]">
        <li className="hover:border-b-[#a09d9d] border-b hover:text-[#a09d9d]">
          <a href="/">Privacy Policy</a>
        </li>
        <li className="hover:border-b-[#a09d9d] border-b hover:text-[#a09d9d]">
          <a href="/">Terms of use</a>
        </li>
      </ul>
      <div className="text-center p-4 uppercase text-[0.8vw]">
        Copyright © 2023 <a href="/">Oleh Matviieshyn</a>. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
