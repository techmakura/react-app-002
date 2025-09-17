import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/homepage';
import ContactPage from './pages/contactPage';
import AboutPage from './pages/aboutPage';
import PageNotFound from './pages/pageNotFound';
import Books from './pages/Books';
import BookDetails from './pages/bookDetails';
import CreateBook from './pages/CreateBook';


library.add(fas, far, fab)

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/books", element: <Books />},
  { path: "/books/:id", element: <BookDetails />},
  { path: "/create-book", element: <CreateBook /> },
  { path: "*", element: <PageNotFound /> }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
