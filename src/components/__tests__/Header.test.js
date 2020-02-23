import React from "react";
import "../../setupTests";
import { shallow } from "enzyme";
import Header from "../Header";

describe("Header", () => {
  const mockProps = {
    searchTerm: "test",
    searchChange: jest.fn()
  };

  const wrapper = shallow(
    <Header
      searchTerms={mockProps.searchTerm}
      searchChange={mockProps.searchChange}
    />
  );

  it("render the Header component with props", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
