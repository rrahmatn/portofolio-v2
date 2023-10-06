import React , {useEffect} from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './pages';
import About from './pages/about';
import { darkMode } from './components/state';
import { useAtom } from 'jotai';
import Contact from './pages/contacs';
import Work from './pages/work';

const App: React.FC = () => {
  const [isDarkMode] = useAtom(darkMode);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home  />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/work",
      element: <Work />,
    },
    {
      path: "/contact",
      element: <Contact />,
    }
  ]);
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke atas halaman saat komponen montok
  }, []);


  return (
    <>
    <main data-theme={isDarkMode ? "winter" : "coffee"}>
      <RouterProvider router={router} /> 
    </main>
    </>
  )
}

export default App