import { useContext } from 'react'
import { ThemeContext } from './theme'
import './App.scss'
import Nav from './components/nav/Nav';
import ArtAbout from './pages/art/artAbout/ArtAbout';

import Landing from './pages/landing/Landing';
import Error from './components/error/Error';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from "react-router-dom";
import DevAbout from './pages/dev/devAbout/DevAbout';
import DevEducation from './pages/dev/devEducation/DevEducation';
import DevExperience from './pages/dev/devExperience/DevExperience';
import DevSkills from './pages/dev/devSkills/DevSkills';
import DevContact from './pages/dev/devContact/DevContact';
import ArtGallery from './pages/art/artGallery/ArtGallery';
import ArtContact from './pages/art/artContact/ArtContact';

const AppLayout = () => {
  const location = useLocation();
  return (
    <main>
      {
        location.pathname !== "/" && <Nav />
      }
      <Outlet />
    </main>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
      path: "/",
      element: (
          <Landing />
        ),
      },
      {
        path: "dev/about",
        element: (
          <DevAbout />
        ),
      },
      {
        path: "dev/education",
        element: (
          <DevEducation />
        ),
      },
      {
        path: "dev/experience",
        element: (
          <DevExperience />
        ),
      },
      {
        path: "dev/skills",
        element: (
          <DevSkills />
        ),
      },
      {
        path: "dev/contact",
        element: (
          <DevContact />
        ),
      },
      {

        path: "art/about",
        element: (
          <ArtAbout />
        ),
      },
      {
        path: "art/gallery",
        element: (
          <ArtGallery />
        ),
      },
      {
        path: "art/contact",
        element: (
          <ArtContact />
        ),
      }
    ],
    errorElement: (
      <Error />
    ),
  }
]);


function App() {
  // const [count, setCount] = useState(0)

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
