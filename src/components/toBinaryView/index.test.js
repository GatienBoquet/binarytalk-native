import React from "react";
import renderer from "react-test-renderer";

import ToBinaryView from "./index";

test("EntryPoint renders correctly", () => {
  const tree = renderer.create(<toBinaryView />).toJSON();
  expect(tree).toMatchSnapshot();
});

/*
TODO : Test clicking copy
*/
test("Test clicking copy", () => {
  const onPressMock = jest.fn();
});
