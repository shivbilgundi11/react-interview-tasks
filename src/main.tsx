import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import ErrorPage from "./error-page.tsx";
import DebouncedFilter from "./pages/debounced-filter.tsx";
import DebouncedSearch from "./pages/debounced-search.tsx";
import DragAndDrop from "./pages/drag-and-drop.tsx";
import FileTree from "./pages/file-tree.tsx";
import HexCodeInput from "./pages/hex-code-input.tsx";
import InfiniteScroll from "./pages/infinite-scroll/infinite-scroll.tsx";
import RouteURLParams from "./pages/routing-task/routes-params.tsx";
import TaskRouting from "./pages/TaskRouting.tsx";
import TasksPage from "./pages/tasks-page.tsx";
import TrafficSignal from "./pages/traffic-signal.tsx";
import VowelsInput from "./pages/vowels-input.tsx";
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
        path: "traffic-signal",
        element: <TrafficSignal />,
      },
      {
        path: "drag-and-drop",
        element: <DragAndDrop />,
      },
      {
        path: "replace-vowels",
        element: <VowelsInput />,
      },
      {
        path: "url-params-routes",
        element: <TaskRouting />,
      },
      {
        path: "debounced-movies-search",
        element: <DebouncedFilter />,
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
