import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Component", () => {
  it("renders the About component with correct content and structure", () => {
    render(<About />);

    // Check if the headings are rendered
    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
    expect(screen.getByText("Chicago")).toBeInTheDocument();

    // Check if the description text is rendered
    expect(
      screen.getByText(/Located in the vibrant heart of Chicago/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Whether you're planning a romantic evening/i)
    ).toBeInTheDocument();

    // Check if the image is rendered with the correct alt text
    const image = screen.getByAltText("about banner");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("Mario and Adrian b.jpg"));
    expect(image).toHaveAttribute("alt", "about banner");

    // Check if the image has the rounded class for styling
    expect(image).toHaveClass("rounded-full");
  });
});
