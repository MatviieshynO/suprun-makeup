import { useRef } from 'react'

//Layouts
import MainLayout from '../layout/MainLayout'
//Components
import Navbar from '../components/Navbar'
import About from '../components/About'
import Contacts from '../components/Contacts'
import Content from '../components/Content'
import ImagesSlider from '../components/ImagesSlider'
import ScrollTopButton from '../components/ScrollTopButton'

const MainPage = () => {
  const toHome = useRef()
  const toAbout = useRef()
  const toContent = useRef()
  const toImageSlider = useRef()
  const toContacts = useRef()

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <div className="max-w-[1536px] bg-[url('https://img.freepik.com/premium-photo/concrete-wall-background_464463-1305.jpg?w=2000')] bg-norepeat bg-center sm:bg-contain">
      <MainLayout>
        <div ref={toHome}>
          <Navbar
            scrollToSection={scrollToSection}
            toHome={toHome}
            toAbout={toAbout}
            toContent={toContent}
            toImageSlider={toImageSlider}
            toContacts={toContacts}
          />
        </div>
        <div ref={toAbout}>
          <About />
        </div>
        <div ref={toContent}>
          <Content />
        </div>
        <div ref={toImageSlider}>
          <ImagesSlider />
        </div>
        <div ref={toContacts}>
          <Contacts />
        </div>
        <ScrollTopButton />
      </MainLayout>
    </div>
  )
}

export default MainPage
