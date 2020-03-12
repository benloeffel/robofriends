import React from "react";
import "../../setupTests";
import { shallow } from "enzyme";
import CardList from "../CardList";

describe("CardList", () => {
  const mockUsers = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      email: "john@doe.com"
    }
  ];

  it("renders the CardList component with prop", () => {
    const wrapper = shallow(<CardList users={mockUsers} />);
    expect(wrapper).toMatchSnapshot();
  });
});
