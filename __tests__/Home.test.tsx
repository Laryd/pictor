import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "@/app/page";

describe("Home Component", () => {
  it("should render Home component", () => {
    render(<Home />);
  });
});
