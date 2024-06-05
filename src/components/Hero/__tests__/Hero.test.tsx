
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero component", () => {
  test("renders component with correct content", () => {
    render(<Hero />);

    // Test for main headings
    expect(screen.getByText("Manage")).toBeInTheDocument();
    expect(screen.getByText("Your")).toBeInTheDocument();
    expect(screen.getByText("Memories")).toBeInTheDocument();
    expect(screen.getByText("Effortlessly")).toBeInTheDocument();

    // Test for description
    expect(
      screen.getByText(
        "Welcome to Pictoria, your go-to app for organizing and managing photo albums with ease. Keep your memories at your fingertips, easily accessible and beautifully displayed. Start now and experience seamless photo management."
      )
    ).toBeInTheDocument();

    // Test for button
    expect(screen.getByText("Get Started")).toBeInTheDocument();

    // Test for image alt text
    expect(
      screen.getByAltText("Beautiful woman holding a flower")
    ).toBeInTheDocument();
  });

  
});
