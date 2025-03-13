import { Route, Routes } from 'react-router-dom';
import Homepage from "../Pages/Homepage";
import OurStory from "../Pages/OurStory"
import Contact from '../Pages/Contact';

function AppRoutes() {
    return (
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/OurStory" element={<OurStory/>} />
      <Route path="/Contact" element={<Contact/>} />
</Routes>
  );
}

export default AppRoutes;