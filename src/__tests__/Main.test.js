import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Main from "../Main";

test("renders Main component without crashing", () => {
  render(<Main />);
});

test("renders Header component", () => {
  render(<Main />);
  expect(screen.getByText("NASA API Application")).toBeInTheDocument();
});

test("renders APOD and OSDR tabs", () => {
  render(<Main />);
  expect(screen.getByText("APOD")).toBeInTheDocument();
  expect(screen.getByText("OSDR")).toBeInTheDocument();
});


test("renders OSDR component when OSDR tab is clicked", () => {
  render(<Main />);

  fireEvent.click(screen.getByText("OSDR"));
  expect(screen.getByText("Data Source")).toBeInTheDocument();
});
