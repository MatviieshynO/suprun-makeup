import { useState } from 'react'
//Components
import LanguageSelect from './LanguageSelect'
//Icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  function openMobileMenu() {
    setMobileMenu(true)
  }
  function closeMobileMenu() {
    setMobileMenu(false)
  }
  return (
    <nav className="flex justify-center border fixed bg-white w-full top-0">
      <div className="flex w-full items-center justify-between px-2 sm:hidden">
        <div className="w-10"></div>
        <img
          src="https://images-platform.99static.com//i5eH2WqTgM63vwiePvt5e6MvtCE=/433x0:1282x849/fit-in/590x590/projects-files/76/7612/761254/eaf890ff-4624-4509-af8c-63c1c2ca61b2.jpg"
          alt="logo"
          className="min-w-[55px] h-[55px]"
        />
        <GiHamburgerMenu
          className={mobileMenu ? 'hidden' : 'w-12'}
          onClick={openMobileMenu}
        />
      </div>
      <ul
        className={
          mobileMenu
            ? 'flex-column fixed right-0 w-full h-full bg-white text-center py-10 px-6 pb-20'
            : 'list-none justify-between items-center flex-nowrap mx-10 text-[2vw] gap-10 px-6 hidden sm:gap-6 sm:inline-flex lg:text-[1.3vw] lg:gap-32 lg:uppercase'
        }
      >
        <li
          className={mobileMenu ? 'flex justify-end ' : 'sm:hidden'}
          onClick={closeMobileMenu}
        >
          <GrClose />
        </li>
        <li className={mobileMenu ? 'flex justify-center w-full' : 'hidden'}>
          <img
            src="https://images-platform.99static.com//i5eH2WqTgM63vwiePvt5e6MvtCE=/433x0:1282x849/fit-in/590x590/projects-files/76/7612/761254/eaf890ff-4624-4509-af8c-63c1c2ca61b2.jpg"
            alt="logo"
            className={mobileMenu ? 'w-[200px] h-[200px]' : 'hidden'}
          />
        </li>
        <li className={mobileMenu ? 'p-2 mt-6' : ''}>
          <a href="##" className={mobileMenu ? 'p-2' : ''}>
            Home
          </a>
        </li>
        <li className={mobileMenu ? 'p-2' : ''}>
          <a href="##" className={mobileMenu ? 'p-2' : ''}>
            About
          </a>
        </li>
        <li className={mobileMenu ? 'p-2' : ''}>
          <a href="##" className={mobileMenu ? 'p-2' : ''}>
            Contacts
          </a>
        </li>
        <li>
          <img
            src="https://images-platform.99static.com//i5eH2WqTgM63vwiePvt5e6MvtCE=/433x0:1282x849/fit-in/590x590/projects-files/76/7612/761254/eaf890ff-4624-4509-af8c-63c1c2ca61b2.jpg"
            alt="logo"
            className={mobileMenu ? 'hidden' : 'min-w-[125px] h-[125px]'}
          />
        </li>
        <li className={mobileMenu ? 'p-2' : ''}>
          <a href="##" className={mobileMenu ? 'p-2' : ''}>
            Gallery
          </a>
        </li>
        <li className={mobileMenu ? 'p-2' : ''}>
          <a href="##" className={mobileMenu ? 'p-2 hover:text' : ''}>
            Portfolio
          </a>
        </li>
        <li className={mobileMenu ? 'flex-column' : ''}>
          <LanguageSelect />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
