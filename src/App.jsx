import { useContext } from 'react'
import { ThemeContext } from './theme'
import './App.scss'
import Nav from './components/nav/Nav';
import DevHome from './pages/dev/devHome/DevHome';
import ArtHome from './pages/art/artHome/ArtHome';
import MatchGame from './components/matchGame/MatchGame';

// import Skills from './pages/dev/skills/Skills'
// import ToggleSwitch from './components/toggleSwitch/ToggleSwitch';
import Landing from './pages/landing/Landing';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from "react-router-dom";

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
        path: "dev",
        element: (
          <DevHome />
        ),
      },
      {
        path: "dev/skills",
        element: (
          <MatchGame />
        ),
      },
      {

        path: "art",
        element: (
          <ArtHome />
        ),
      }
    ]
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
