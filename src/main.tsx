import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import ErrorPage from "./error-page.tsx";
import DebouncedSearch from "./pages/debounced-search.tsx";
import FileTree from "./pages/file-tree.tsx";
import HexCodeInput from "./pages/hex-code-input.tsx";
import InfiniteScroll from "./pages/infinite-scroll/infinite-scroll.tsx";
import RouteURLParams from "./pages/routing-task/routes-params.tsx";
import TaskRouting from "./pages/TaskRouting.tsx";
import TasksPage from "./pages/tasks-page.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";

// Define Routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "tasks",
    element: <TasksPage />,
    children: [
      {
        path: "url-params-routes",
        element: <TaskRouting />,
      },
      {
        path: "infinite-content-scroll",
        element: <InfiniteScroll />,
      },
      {
        path: "debounced-search",
        element: <DebouncedSearch />,
      },
      {
        path: "url-params-routes/examples",
        element: <RouteURLParams />,
      },
      {
        path: "file-tree",
        element: <FileTree />,
      },
      {
        path: "hex-code-input",
        element: <HexCodeInput />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  </StrictMode>,
);
