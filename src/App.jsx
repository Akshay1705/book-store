import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import BestBooks from './components/BestBooks/BestBooks.jsx'
import Banner from './components/Banner/Banner.jsx'
import AppStore from './components/AppStore/AppStore.jsx'
import AllBooks from './components/AllBooks/AllBooks.jsx'
import Testinomial from './components/Testimonial/Testinomial.jsx'
import Footer from './components/Footer/Footer.jsx'
const App = () => {
  return (
    <>
    <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen duration-200'>
    <Navbar />
    <Hero/>
    <BestBooks/>
    <Banner/>
    <AppStore/>
    <AllBooks/>
    <Testinomial/>
    <Footer/>
    </div>
    </>
  )
}

export default App