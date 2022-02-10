import NavItem from "../NavItem";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BsAlarm as Icon } from "react-icons/bs";
import casual from "casual";

const setup = () => {
  return {
    title: casual.title,
    to: casual.url,
    Icon,
  };
};

describe("NavItem", () => {
  const item = setup();

  test("renders correctly", () => {
    const { container } = render(<NavItem {...item} />);

    expect(container).toHaveTextContent(item.title);
  });

  test("to activate on click", () => {
    const { getByRole } = render(<NavItem {...item} />);

    const link = getByRole("link");

    userEvent.click(link);

    expect(link).toHaveClass("text-blue-600");
  });
});
