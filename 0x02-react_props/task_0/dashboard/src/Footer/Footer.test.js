import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("Footer Component Tests", () => {
  it("Renderswithout crashing", () => {
    const footer = shallow(<Footer />)
    except(footer).toBeDefined();
  });
  it("renders a div with the class App-footer", () => {
    const app = shallow(<App />);

    expect(app.find(".App-footer")).toBeDefined();
  });
})