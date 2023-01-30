import { render, screen } from "@testing-library/react";
import { Login } from "../components/Login";

describe("Main Page handler", () => {
  it("must display the home page title- Welcome", () => {
    render(<Login isLoggedIn="true" />);
    expect(screen.getByText("Welcome")).toBeTruthy();
  });

  it("must display the home page title - Login", () => {
    render(<Login />);
    expect(screen.getByText("Login")).toBeTruthy();
  });
});
