import React from "react";
import "../../setupTests";
import { shallow } from "enzyme";
import MainPage from "../MainPage";

describe("MainPage", () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      searchTerm: "",
      users: [],
      isLoading: false,
      error: {},
      onSearchChange: jest.fn(),
      onRequestUsers: jest.fn(),
      filterUsers: 0
    };

    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it("renders the <MainPage /> component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
