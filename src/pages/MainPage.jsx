//Layouts
import MainLayout from '../layout/MainLayout'
//Components
import About from '../components/About'
import Contacts from '../components/Contacts'

const MainPage = () => {
  return (
    <div>
      <MainLayout>
        <About />
        <Contacts />
      </MainLayout>
    </div>
  )
}

export default MainPage
