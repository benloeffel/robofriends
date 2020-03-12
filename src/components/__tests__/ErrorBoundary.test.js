import React from "react";
import "../../setupTests";
import { shallow, mount } from "enzyme";
import ErrorBoundary from "../ErrorBoundary";

describe("ErrorBoundary", () => {
  it("renders the ErrorBoundary component", () => {
    const wrapper = shallow(<ErrorBoundary />);
    expect(wrapper).toMatchSnapshot();
  });

  const Something = () => null;
  it("should display an error message if wrapped component throws an error", () => {
    const wrapper = mount(
      <ErrorBoundary>
        <Something />
      </ErrorBoundary>
    );

    const error = new Error("test");
    wrapper.find(Something).simulateError(error);
  });
});
