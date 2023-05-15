import { useState } from 'react'

//Components
import LanguageSelect from './LanguageSelect'
//Icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'

const Navbar = ({
  scrollToSection,
  toHome,
  toAbout,
  toContent,
  toImageSlider,
  toContacts,
}) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  function openMobileMenu() {
    setMobileMenu(true)
  }
  function closeMobileMenu() {
    setMobileMenu(false)
  }
  return (
    <nav className="flex justify-center p-10 fixed w-full top-0 z-50 shadow shadow-pink-700 bg-[url('https://img.freepik.com/premium-photo/concrete-wall-background_464463-1305.jpg?w=2000')] bg-norepeat bg-cover bg-center">
      <div className="flex w-full items-center justify-between px-2 sm:hidden">
        <div className="w-10 "></div>
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
            ? 'flex fixed right-0 w-full h-[8%] bg-white text-center sm:py-10 sm:px-6 sm:pb-20 items-center justify-center content-center'
            : 'list-none justify-between items-center flex-nowrap mx-10 text-[2vw] gap-10 px-6 hidden sm:gap-6 sm:inline-flex lg:text-[1.3vw] lg:gap-32 lg:uppercase'
        }
      >
        <li className={mobileMenu ? 'hidden' : ''}>
          <button
            className={
              mobileMenu
                ? ''
                : 'hover:border-b-[2px] hover:border-pink-700 hover:text-pink-800 gsap-07'
            }
            onClick={() => scrollToSection(toHome)}
          >
            HOME
          </button>
        </li>
        <li className={mobileMenu ? 'flex sm:p-2' : ''}>
          <button
            className={
              mobileMenu
                ? 'text-[3.9vw] uppercase p-[4px]'
                : 'hover:border-b-[2px] hover:border-pink-700 hover:text-pink-800 gsap-07'
            }
            onClick={() => scrollToSection(toAbout)}
          >
            ABOUT
          </button>
        </li>
        <li className={mobileMenu ? 'flex sm:p-2' : ''}>
          <button
            className={
              mobileMenu
                ? 'text-[3.9vw] uppercase p-[4px]'
                : 'hover:border-b-[2px] hover:border-pink-700 hover:text-pink-800 gsap-07'
            }
            onClick={() => scrollToSection(toContacts)}
          >
            CONTACTS
          </button>
        </li>
        <li>
          <NavLink to="/" className="absolute top-0 left-[680px]">
            <img
              src="https://images-platform.99static.com//i5eH2WqTgM63vwiePvt5e6MvtCE=/433x0:1282x849/fit-in/590x590/projects-files/76/7612/761254/eaf890ff-4624-4509-af8c-63c1c2ca61b2.jpg"
              alt="logo"
              onClick={() => scrollToSection(toHome)}
              className={
                mobileMenu
                  ? 'hidden'
                  : 'min-w-[150px] h-[150px] rounded-full shadow-lg shadow-black hover:shadow-pink-700 hover:shadow-sm gsap-08'
              }
            />
          </NavLink>
        </li>
        <li className={mobileMenu ? 'flex sm:p-2' : ''}>
          <button
            className={
              mobileMenu
                ? 'text-[3.9vw] uppercase p-[4px]'
                : 'hover:border-b-[2px] hover:border-pink-700 hover:text-pink-800 gsap-07'
            }
            onClick={() => scrollToSection(toContent)}
          >
            CONTENT
          </button>
        </li>
        <li className={mobileMenu ? 'flex sm:p-2' : ''}>
          <button
            className={
              mobileMenu
                ? ' text-[3.9vw] uppercase p-[4px]'
                : 'hover:border-b-[2px] hover:border-pink-700 hover:text-pink-800 gsap-07'
            }
            onClick={() => scrollToSection(toImageSlider)}
          >
            GALLERY
          </button>
        </li>
        <li className={mobileMenu ? 'hidden' : 'gsap-08'}>
          <LanguageSelect />
        </li>
        <li
          className={mobileMenu ? 'flex justify-end pl-6' : 'sm:hidden'}
          onClick={closeMobileMenu}
        >
          <GrClose />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
