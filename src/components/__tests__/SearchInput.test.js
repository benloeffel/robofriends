import React from "react";
import "../../setupTests";
import { shallow } from "enzyme";
import SearchInput from "../SearchInput";

describe("SearchInput", () => {
  const mockProps = {
    searchTerm: "test",
    onSearchChange: jest.fn()
  };

  const wrapper = shallow(<SearchInput {...mockProps} />);

  it("renders the SearchInput component with props", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
