/**
 * @jest-environment jsdom
 */


import Header from "./Header";
import { render, screen } from "@testing-library/react";


describe("Header", () => {
  test("render Elige una ciudad:", () => {
    render(<Header />);


    screen.debug();




    
  });
});
