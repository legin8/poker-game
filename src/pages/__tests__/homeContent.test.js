import { render, screen } from "@testing-library/react";
import { HomeContent } from "../home/Content/HomeContent";

test("home content", () => {
  render(<HomeContent />);
  expect(screen.getByTestId("hcText")).toHaveTextContent("Welcome to Poker.");
});
