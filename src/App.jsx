import Home from "./pages/Home";
import Surah from "./pages/Surah";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "surah/:surahId",
      element: <Surah />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
