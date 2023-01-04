import { useState } from 'react'
import './App.css'

// React Router
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductPreview from './pages/ProductPreview/ProductPreview'

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='product-preview' element={<ProductPreview />} /> 
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={route}/>
    </div>
  )
}

const Root = () => {
  return (
    <>
    <Outlet/>
    </>
  )
}

export default App
