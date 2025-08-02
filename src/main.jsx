import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Pages/Login.jsx";
import "@mantine/core/styles.css";
import Jobs from "./components/Pages/Jobs.jsx";
import JobDetails from "./components/Pages/JobDetails.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/jobs/:id",
    element: <JobDetails />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <MantineProvider defaultColorScheme="dark">
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </MantineProvider>
);
