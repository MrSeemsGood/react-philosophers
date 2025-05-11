import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';

import Home from './pages/Home.tsx';
import Schools from './pages/Schools.tsx';
import Books from './pages/Books.tsx';
import Terms from './pages/Terms.tsx';
import Exams from './pages/Exams.tsx';
import Combine from './pages/Combine.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Combine",
    element: <Combine />,
  },
  {
    path: "/Schools",
    element: <Schools />,
  },
  {
    path: "/Books",
    element: <Books />,
  },
  {
    path: "/Terms",
    element: <Terms />,
  },
  {
    path: "/Exams",
    element: <Exams />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
