import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Location from './pages/Location/Location'
import Layout from './components/Layout/Layout'
import './index.css'

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="locations/:id" element={<Location />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
