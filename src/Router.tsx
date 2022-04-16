import { BrowserRouter, Routes, Route, } from "react-router-dom";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";


function Router() {

  return(
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </>
  )
}

export default Router;