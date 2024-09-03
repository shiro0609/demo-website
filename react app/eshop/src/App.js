import React from 'react';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Products from './components/products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProduct from './components/topproduct';
import Banner from './components/banner';
import Subscribe from './components/subs';
import Testimonial from './components/testimonial';
import Footer from './components/footer';
import Popup from './components/popup';

function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero />
      <Products />
      <TopProduct />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonial />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default App;
