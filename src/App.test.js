import { render, screen } from "@testing-library/react";
import  {BrowserRouter}  from "react-router-dom";
import App from "./App";

test("test rendering App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
