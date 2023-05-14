//Components
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
