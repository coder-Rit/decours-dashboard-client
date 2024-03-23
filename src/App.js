import logo from "./logo.svg";
import "./App.css";
import { Toaster, toast } from "sonner";
import Main from "./compontents/Main";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import LogoSection from "./compontents/logo/logoSection";
import AboutSection from "./compontents/About/AboutSection";
import Carousel from "./compontents/Crousal/Crousal";
import OurService from "./compontents/ourService/OurService";
import OurWork from "./compontents/work/OurWork";
import Reviews from "./compontents/reviews/Reviews";
import Brands from "./compontents/Brands/Brands";
import ProtectedRoute from "./compontents/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Main />} />
        <Route
          path="/Navigation"
          element={<ProtectedRoute comp={<LogoSection />}></ProtectedRoute>}
        />
        <Route path="/Crousal" element={<ProtectedRoute comp={<AboutSection />}></ProtectedRoute>} />
        <Route path="/About" element={<ProtectedRoute comp={<Carousel />}></ProtectedRoute>} />
        <Route path="/Services" element={<ProtectedRoute comp={<OurService /> }></ProtectedRoute>} />
        <Route path="/Work" element={ <ProtectedRoute comp={<OurWork />}></ProtectedRoute>} />
        <Route path="/Reviews" element={ <ProtectedRoute comp={<Reviews />}></ProtectedRoute>} />
        <Route path="/Brands" element={ <ProtectedRoute comp={<Brands />}></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
