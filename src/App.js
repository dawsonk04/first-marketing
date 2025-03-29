import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookCall from './components/BookCall';
import Portfolio from './components/Portfolio';

// Structured data for organization
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "First Marketing",
  "url": "https://1st-marketing.com",
  "logo": "https://1st-marketing.com/1'st.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "dawson@1st-marketing.com",
    "contactType": "customer service"
  },
  "description": "Strategic copywriting and marketing services that convert. We craft personalized messages that speak directly to your ideal customers."
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<BookCall />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
      </Router>
    </HelmetProvider>
  );
}

export default App;
