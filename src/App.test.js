import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders base application", () => {
  render(<App />);
  const linkElement = screen.getByText("Hi, I'm Michael");
  expect(linkElement).toBeInTheDocument();
});
