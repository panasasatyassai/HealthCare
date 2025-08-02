// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DoctorProfile from './pages/DoctorProfile';
import NotFound from './pages/NotFound'; 
import ThankYou from './components/ThankYou';
import Header from './components/Header';
import BookedUsers from './components/BookedUsers'; 
import "./App.css"

const App = () => (
  <Router>
    <div className='background-container'> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/booked-users" element={<BookedUsers />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  </Router>
)

export default App;
