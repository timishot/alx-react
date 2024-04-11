import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login Component Tests", () => {
  it("Renderswithout crashing", () => {
    const login = shallow(<Login />)
    except(login).toBeDefined();
  });
  it("renders a div with the class App-body", () => {
    const login = shallow(<Login />);

    expect(login.find(".App-body")).toBeDefined();
  });
})
