import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { MemoryRouter } from "react-router-dom";

describe("Footer Component", () => {
  it("renders the footer with correct structure and content", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Check if the logo is rendered
    const logo = screen.getByAltText("footer-logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", expect.stringContaining("logo-white.png"));

    // Check if 'SITEMAP' links are rendered correctly
    const sitemapHeader = screen.getByText("SITEMAP");
    expect(sitemapHeader).toBeInTheDocument();

    const links = [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Menu", href: "/menu" },
      { text: "Reservations", href: "/reservations" },
      { text: "Order Online", href: "/order-online" },
      { text: "Login", href: "/login" },
    ];

    links.forEach((link) => {
      const element = screen.getByText(link.text);
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("href", link.href);
    });

    // Check if 'CONTACT' details are rendered
    expect(screen.getByText("CONTACT")).toBeInTheDocument();
    expect(screen.getByText("96 Isabella")).toBeInTheDocument();
    expect(screen.getByText("987-654-4321")).toBeInTheDocument();
    expect(screen.getByText("littlelemon@social.com")).toBeInTheDocument();

    // Check if 'SOCIAL MEDIA LINKS' are rendered with correct links
    const socialMediaLinks = [
      { text: "Facebook", href: "https://www.facebook.com" },
      { text: "Instagram", href: "https://www.instagram.com" },
      { text: "Twitter", href: "https://www.twitter.com" },
    ];

    socialMediaLinks.forEach((link) => {
      const element = screen.getByText(link.text);
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("href", link.href);
      expect(element).toHaveAttribute("target", "_blank");
      expect(element).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
