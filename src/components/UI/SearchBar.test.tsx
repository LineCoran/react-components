import { describe, it } from "vitest";
import { screen, render } from "@testing-library/react";
import SearchBar from "./SearchBar";
import React from "react";

describe("SearchBar", () => {
  it("render input", () => {
    render(<SearchBar placeholder="" search="" handleInput={(value) => console.log(value)} />);
    const input = screen.getByTestId("inputTestId");
    expect(input).toBeInTheDocument();
  });

  it("check svg icon in input", () => {
    render(<SearchBar placeholder="" search="" handleInput={(value) => console.log(value)} />);
    const svgIcon = screen.getByTestId("svgTestId");
    expect(svgIcon).toContain(React.Component);
  });

  it("input check placeholder props", () => {
    const placeholderValue = "somethink";
    render(
      <SearchBar
        placeholder={placeholderValue}
        search=""
        handleInput={(value) => console.log(value)}
      />
    );
    const input = screen.getByPlaceholderText(placeholderValue);
    expect(input).toBeInTheDocument();
  });

  it("input check input value props", () => {
    const inputValue = "somethink";
    render(
      <SearchBar
        placeholder="text"
        search={inputValue}
        handleInput={(value) => console.log(value)}
      />
    );
    const input = screen.getByPlaceholderText(/text/i);
    expect(input).toBeInTheDocument();
  });
});
