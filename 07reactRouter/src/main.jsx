import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from 'react-router-dom' 
import Home from './Components/home/Home.jsx'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact us/Contact.jsx'
import Github, { githubInfo } from './Components/User/Github.jsx'
import Name from  './Components/Name/Name.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element ={<Home/>}/>
      <Route path="about" element ={<About/>}/>
      <Route path="contact" element ={<Contact/>}/>
      <Route 
      loader={githubInfo}
      path="github"
      element ={<Github />}/>
      <Route path="user/:userid" element={<Name/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
