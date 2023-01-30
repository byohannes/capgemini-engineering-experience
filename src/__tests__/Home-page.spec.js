import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { HomePage } from "../components/HomePage";

describe("Main Page handler", () => {
  it("must display the home page title", () => {
    render(<HomePage />);
    expect(screen.getByText(/welcome To DCX!/i)).toBeInTheDocument();
  });

  it("should contain a h1", () => {
    render(<HomePage />);
    expect(screen.getByText(/Engineering Experience/i)).toBeInTheDocument();
  });

  it("check box changes the text after click", () => {
    const { queryByLabelText, getByLabelText } = render(
      <HomePage labelOn="On" labelOff="Off" />
    );
    expect(queryByLabelText('Off')).toBeInTheDocument();

    fireEvent.click(getByLabelText('Off'));
    
    expect(queryByLabelText(/On/i)).toBeInTheDocument();
  });
});
