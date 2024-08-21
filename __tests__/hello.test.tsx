import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

// const Counter = () => {
//   const { count, increase, decrease } = useStore();
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   );
// };
// describe("Counter", () => {
//   it("renders initial count", () => {
//     render(<Counter />);
//     expect(screen.getByText("0")).toBeInTheDocument();
//   });
// it("increases count", () => {
//   render(<Counter />);
//   screen.getByText("Increase").click();
//   console.log(screen.getByText("0"));
//   expect(screen.getByText("1")).toBeInTheDocument();
// });
// it("decreases count", () => {
//   render(<Counter />);
//   screen.getByText("Decrease").click();
//   expect(screen.getByText("-1")).toBeInTheDocument();
// });
// };

// sample template tests
describe("hello", () => {
  it("world", () => {
    expect("world").toBe("world");
  });
});
