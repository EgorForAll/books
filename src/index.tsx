import ReactDOM from "react-dom/client";
import "./index.css";
import "./scss/main.scss";
import React from "react";
import { Provider } from "react-redux";
import { setUpStore } from "./store/reducer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchingPage from "./components/pages/searching-page";
import BookDesc from "./components/pages/books-desc";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setUpStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchingPage />,
  },
  {
    path: "/book/:id",
    element: <BookDesc />,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
