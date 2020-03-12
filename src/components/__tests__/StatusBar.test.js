import React from "react";
import "../../setupTests";
import { shallow } from "enzyme";
import StatusBar from "../StatusBar";

const mockProps = {
  loading: false,
  error: { status: false, message: "" },
  resultLength: 1
};

const wrapper = shallow(<StatusBar {...mockProps} />);

describe("StatusBar", () => {
  it("renders the StatusBar component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders the loading message when 'loading' prop is true", () => {
    const mockProps2 = {
      loading: true,
      error: { status: false, message: "" },
      resultLength: 1
    };
    const wrapper2 = shallow(<StatusBar {...mockProps2} />);

    expect(wrapper2).toMatchSnapshot();
  });

  it("renders the error message when 'error' prop is true", () => {
    const mockProps3 = {
      loading: false,
      error: {
        status: true,
        message: "Sorry, we could not find any robots matching your search."
      },
      resultLength: 0
    };
    const wrapper3 = shallow(<StatusBar {...mockProps3} />);

    expect(wrapper3).toMatchSnapshot();
  });

  it("renders the error message when 'error' prop is true", () => {
    const mockProps4 = {
      loading: false,
      error: {
        status: false,
        message: "Sorry, we could not find any robots matching your search."
      },
      resultLength: 0
    };
    const wrapper4 = shallow(<StatusBar {...mockProps4} />);

    expect(wrapper4).toMatchSnapshot();
  });
});
