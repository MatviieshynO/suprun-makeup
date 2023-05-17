//Icons
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { BsFillTelephoneFill } from 'react-icons/bs'

const SocialMediaLinks = () => {
  return (
    <div className="flex sm:gap-2 gap-1 sm:text-2">
      <a
        href="https://www.instagram.com/makeup_suprun_k_artist_/"
        target="blank"
      >
        <BsInstagram className="sm:text-[1.4vw] hover:border-b hover:text-pink-700" />
      </a>
      <a href="/">
        <FaFacebook className="sm:text-[1.4vw] hover:border-b hover:text-pink-700" />
      </a>
      <a href="mailto:glikeria.21@gmail.com">
        <TfiEmail className="sm:text-[1.4vw] hover:border-b hover:text-pink-700" />
      </a>
      <a href="tel:+48-661-737-404" data-rel="external">
        <BsFillTelephoneFill className="sm:text-[1.4vw] hover:border-b hover:text-pink-700" />
      </a>
    </div>
  )
}

export default SocialMediaLinks
