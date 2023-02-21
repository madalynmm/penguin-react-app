import React, {useState} from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer'; 
import About from './pages/About'; 
import Portfolio from './pages/Portfolio'; 
import Contact from './pages/Contact'; 
import Resume from './pages/Resume'; 

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of 'currentPage' is. Depending on the value of currentPage, we retun the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default PortfolioContainer;