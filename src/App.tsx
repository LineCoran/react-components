import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About/About";
import Main from "./pages/Main/Main";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return <Main />;
}

export default App;
