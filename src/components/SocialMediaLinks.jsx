//Icons
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { BsFillTelephoneFill } from 'react-icons/bs'

const SocialMediaLinks = () => {
  return (
    <div className="flex sm:gap-2 gap-1 text-2">
      <a href="/">
        <BsInstagram className="text-[1.4vw] hover:border-b" />
      </a>
      <a href="/">
        <FaFacebook className="text-[1.4vw] hover:border-b" />
      </a>
      <a href="/">
        <TfiEmail className="text-[1.4vw] hover:border-b" />
      </a>
      <a href="/">
        <BsFillTelephoneFill className="text-[1.4vw] hover:border-b" />
      </a>
    </div>
  )
}

export default SocialMediaLinks
