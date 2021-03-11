import { render, screen } from "@testing-library/react";
import Header from "./index";

test("renders Header component", () => {
  render(<Header />);
  const title = screen.getByText(/Bookmarks/i);
  expect(title).toBeInTheDocument();
});
