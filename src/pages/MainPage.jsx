//Layouts
import MainLayout from '../layout/MainLayout'
//Components
import About from '../components/About'
import Contacts from '../components/Contacts'
import Content from '../components/Content'
import ImagesSlider from '../components/ImagesSlider'

const MainPage = () => {
  return (
    <div>
      <MainLayout>
        <About />
        <Content />
        <ImagesSlider />
        <Contacts />
      </MainLayout>
    </div>
  )
}

export default MainPage
