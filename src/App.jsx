import Home from "./pages/Home";
import Surah from "./pages/Surah";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
