import { screen, render } from "@testing-library/react";
import Gentelmen from "./Gentelmen";

describe("Given a Gentelmen function", () => {
  describe("When it is rendered by the App function", () => {
    test("Then it should render an element with the info of el Fary", () => {
      render(<Gentelmen />);

      const linkElement = screen.getByText("The Fary");
      expect(linkElement.textContent).toBeTruthy();
    });
  });
});
