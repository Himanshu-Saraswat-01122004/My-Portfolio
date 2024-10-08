import './App.scss';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
// import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element= {<Home />} />
        <Route path="about" element = {<About />} />
        <Route path = "contact" element ={<Contact />} />
        <Route path = "portfolio" element = {<Portfolio />} />
      </Route>
    </>
  )
);
function App() {
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App;
