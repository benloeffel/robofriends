import React from "react";
import "../../setupTests";
import { shallow } from "enzyme";
import Head from "../Head";

describe("Head", () => {
  const wrapper = shallow(<Head />);

  it("renders the Head component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
