import React, {useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './pages/About'; 
import Portfolio from './pages/Portfolio'; 
import Contact from './pages/Contact'; 
import Resume from './pages/Resume'; 
import '../styles/header.css';

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

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
      <header className="header">
        <h1 >Madalyn Marino</h1>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default PortfolioContainer;