import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given a Info function", () => {
  describe("When it is instantiated with a 5 as a value given", () => {
    test("Then it should render a section in the container called App with the text '5 gentlemen pointing at you'", () => {
      render(<Info numberOfMarkedGentelmen={5} />);
      // const expectedText = "5 gentlemen pointing at you";
      const linkElement = screen.getByText("5 gentlemen pointing at you");
      expect(linkElement.textContent).toBeTruthy();
    });
  });
});
