import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import BestBooks from './components/BestBooks/BestBooks.jsx'
import Banner from './components/Banner/Banner.jsx'
import AppStore from './components/AppStore/AppStore.jsx'
import AllBooks from './components/AllBooks/AllBooks.jsx'
import Testinomial from './components/Testimonial/Testinomial.jsx'
import Footer from './components/Footer/Footer.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import Popup from './components/Popup/Popup.jsx'
const App = () => {

  const [orderPopup,setOrderPopup]=React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }
  // Initialize AOS (Animate On Scroll) library
  React.useEffect(() => {
    AOS.init({
      offset:  100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
    
  return (
    <>
    <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen duration-200'>
    <Navbar handleOrderPopup = {handleOrderPopup}/>
    <Hero handleOrderPopup = {handleOrderPopup}/>
    <BestBooks handleOrderPopup = {handleOrderPopup}/>
    <Banner/>
    <AppStore/>
    <AllBooks/>
    <Testinomial/>
    <Footer/>
    <Popup handleOrderPopup = {handleOrderPopup}
    orderPopup={orderPopup}/>
    </div>
    </>
  )
}

export default App