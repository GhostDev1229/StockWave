import React from 'react';
import { render, screen } from '@testing-library/react';
//to delay the check...when the component is fetching the data form the package there might be some delay in fetching this package is used fr that
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/Home/Hero";

// Test Suite
describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
  });
});
