import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import AdvisoryCommittee from "./pages/AdvisoryCommittee";
import SteeringCommittee from "./pages/SteeringCommittee";
import Schedule from "./pages/Schedule";
import Registration from "./pages/Registration";
import CallForPapers from "./pages/CallForPapers";
import AuthorGuidelines from "./pages/AuthorGuidelines";
import Speakers from "./pages/Speakers";
import Venue from "./pages/Venue";
import LocalAttractions from "./pages/LocalAttractions";
import Contact from "./pages/Contact";
import CmtAcknowledgement from "./pages/CmtAcknowledgement";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<OrganizingCommittee />} />
          <Route path="/committee/organizing" element={<OrganizingCommittee />} />
          <Route path="/committee/advisory" element={<AdvisoryCommittee />} />
          <Route path="/committee/steering" element={<SteeringCommittee />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/author-guidelines" element={<AuthorGuidelines />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/venue/local-attractions" element={<LocalAttractions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cmt-acknowledgement" element={<CmtAcknowledgement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
