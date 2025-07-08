import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import RootLayout from "./components/RootLayout/RootLayout";
import Home from "./pages/home/HomePage";
import ServicePage from "./pages/services/ServicesPage";
import RequestServicePage from "./pages/requested-service/RequestedServicePage";
import ProvidersPage from "./pages/providers/ProvidersPage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/solicita-serviciu",
        element: <ServicePage />,
      },
      {
        path: "/solicita-serviciu/:categorySlug",
        element: <RequestServicePage />,
      },
      {
        path: "/devino-prestator",
        element: <ProvidersPage />,
      },
      {
        path: "/despre",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
