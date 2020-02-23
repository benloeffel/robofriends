import React from "react";
import "../../setupTests";
import { shallow, mount } from "enzyme";
import Card from "../Card";

describe("Card", () => {
  const mockProps = {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@doe.com"
  };

  const wrapper = shallow(<Card {...mockProps} />);

  it("renders the Card component with props", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays the card details", () => {
    const wrapper = mount(<Card {...mockProps} />);
    expect(wrapper.find("h2")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(2);
  });
});
