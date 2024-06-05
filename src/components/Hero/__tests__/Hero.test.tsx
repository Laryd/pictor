
import { render } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero component", () => {
  test("renders component with correct content", () => {
    const { getByText, getByAltText } = render(<Hero />);

    // Test for main headings
    expect(getByText("Manage")).toBeInTheDocument();
    expect(getByText("Your")).toBeInTheDocument();
    expect(getByText("Memories")).toBeInTheDocument();
    expect(getByText("Effortlessly")).toBeInTheDocument();

    // Test for description
    expect(
      getByText(
        "Welcome to Pictoria, your go-to app for organizing and managing photo albums with ease. Keep your memories at your fingertips, easily accessible and beautifully displayed. Start now and experience seamless photo management."
      )
    ).toBeInTheDocument();

    // Test for button
    expect(getByText("Get Started")).toBeInTheDocument();

    // Test for image alt text
    expect(
      getByAltText("Beautiful woman holding a flower")
    ).toBeInTheDocument();
  });

  
});
