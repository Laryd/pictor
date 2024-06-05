import React from "react";
import { render, screen} from "@testing-library/react";
import Features from "../Features";

describe("Features component", () => {
  test("renders component with correct feature names", () => {
    render(<Features />);

    // Check if each feature name is rendered correctly
    expect(screen.getByText("Impeccable Organization")).toBeInTheDocument();
    expect(
      screen.getByText("Unwavering Confidentiality and Security")
    ).toBeInTheDocument();
    expect(screen.getByText("Seamless Access")).toBeInTheDocument();
    expect(screen.getByText("Versatility in File Formats")).toBeInTheDocument();
    expect(screen.getByText("Tailored to Your Preferences")).toBeInTheDocument();
    expect(screen.getByText("Round-the-Clock Customer Support")).toBeInTheDocument();
  });
});
