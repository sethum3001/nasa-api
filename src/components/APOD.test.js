import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import APOD from "./APOD";

test("renders APOD component without crashing", () => {
  render(<APOD />);
});
// test('displays loading spinner while fetching data', async () => {
//   render(<APOD />);
//   expect(screen.getByRole('progressbar')).toBeInTheDocument();
// });

// test('displays image, title, and explanation correctly', async () => {
//   render(<APOD />);
//   // Wait for the fetch to complete
//   expect(screen.getByRole('img')).toBeInTheDocument();
//   expect(screen.getByRole('heading')).toBeInTheDocument();
//   expect(screen.getByText(/explanation text/i)).toBeInTheDocument();
// });

// test("displays image, title, and explanation correctly", async () => {
//   render(<APOD />);

//   // Wait for the image to appear in the DOM
//   await waitFor(() => {
//     expect(screen.getByRole("img")).toBeInTheDocument();
//   });

  // // Wait for the heading to appear in the DOM
  // await waitFor(() => {
  //   expect(screen.getByRole("heading")).toBeInTheDocument();
  // });

  // // Wait for the explanation text to appear in the DOM
  // await waitFor(() => {
  //   expect(screen.getByText(/explanation text/i)).toBeInTheDocument();
  // });
// });

// test('changes displayed image when date input changes', async () => {
//   render(<APOD />);
//   // Wait for the fetch to complete
//   const initialImageSrc = screen.getByRole('img').src;
//   fireEvent.change(screen.getByRole('textbox'), { target: { value: '2022-01-01' } });
//   // Wait for the fetch to complete
//   await waitFor(() => expect(screen.queryByRole('progressbar')).toBeNull());
//   expect(screen.getByRole('img').src).not.toBe(initialImageSrc);
// });
