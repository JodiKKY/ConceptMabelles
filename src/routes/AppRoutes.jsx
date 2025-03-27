import { Route, Routes } from 'react-router-dom';
import Homepage from "../Pages/Homepage";
import OurStory from "../Pages/OurStory"
import Contact from '../Pages/Contact';
import Auth from '../Pages/AuthPage';
import  Tracking  from '../Pages/Tracking';
import Shopping from '../Pages/Shopping';
import Legal from '../Pages/Legal';

function AppRoutes() {
    return (
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/OurStory" element={<OurStory/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Auth" element={<Auth/>} />
      <Route path="/Tracking" element={<Tracking/>} />
      <Route path="/Shopping" element={<Shopping/>} />
      <Route path="/Legal" element={<Legal/>} />
</Routes>
  );
}

export default AppRoutes;