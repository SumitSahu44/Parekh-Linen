// Basic Routing Structure
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Management from './pages/Management';
import TradeEnquiry from './pages/TradeEnquiry';
import Tender from './pages/Tender';
import Career from './pages/Career';
import Appointment from './pages/Appointment';
// import IndiaMap from './components/common/IndiaMap3D';
function App() {
  return (
    <Router>
      <div className="font-sans text-slate-900 bg-slate-50">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/management" element={<Management />} />
          <Route path="/trade-enquiry" element={<TradeEnquiry />} />
          <Route path="/tender-contract" element={<Tender />} />
          <Route path="/career" element={<Career />} />
          <Route path="/appointment" element={<Appointment />} />
          {/* <Route path="/india-map" element={<IndiaMap />} /> */}
                {/* <IndiaMap /> */}
      </Routes>

        <FloatingWhatsApp phoneNumber="+91XXXXXXXXXX" />
        <Footer />
      </div>
    </Router>
  );
}


export default App;