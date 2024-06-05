import React from "react";
import { render } from "@testing-library/react";
import Features from "../Features";

describe("Features component", () => {
  test("renders component with correct feature names", () => {
    const { getByText } = render(<Features />);

    // Check if each feature name is rendered correctly
    expect(getByText("Impeccable Organization")).toBeInTheDocument();
    expect(
      getByText("Unwavering Confidentiality and Security")
    ).toBeInTheDocument();
    expect(getByText("Seamless Access")).toBeInTheDocument();
    expect(getByText("Versatility in File Formats")).toBeInTheDocument();
    expect(getByText("Tailored to Your Preferences")).toBeInTheDocument();
    expect(getByText("Round-the-Clock Customer Support")).toBeInTheDocument();
  });
});
