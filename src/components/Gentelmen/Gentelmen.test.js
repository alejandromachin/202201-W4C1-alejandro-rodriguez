import { screen, render } from "@testing-library/react";
import Gentelmen from "./Gentelmen";

describe("Given a Gentelmen function", () => {
  describe("When it is rendered by the App function and given a gentelman object", () => {
    test("Then it should render an element with the property 'name' on it", () => {
      const gentelman = { name: "juanito" };
      render(<Gentelmen gentelman={gentelman} />);

      const linkElement = screen.getByText("juanito");
      expect(linkElement.textContent).toBeTruthy();
    });
  });

  describe("When it is clicked on without being selected", () => {
    test("Then it should add the class 'selected'", () => {
      const gentelman = { name: "juanito", selected: false };
      render(<Gentelmen gentelman={gentelman} />);

      const linkElement = screen.getByClassName("gentelman");
      expect(linkElement.textContent).toMatch("selected");
    });
  });
});
