import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Committee from "./pages/Committee";
import Schedule from "./pages/Schedule";
import Registration from "./pages/Registration";
import CallForPapers from "./pages/CallForPapers";
import Speakers from "./pages/Speakers";
import Venue from "./pages/Venue";
import Contact from "./pages/Contact";
import CmtAcknowledgement from "./pages/CmtAcknowledgement";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cmt-acknowledgement" element={<CmtAcknowledgement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
