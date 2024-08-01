import React from "react";
import renderer from "react-test-renderer";

import EntryPoint from "./EntryPoint";

test("EntryPoint renders correctly", () => {
	const tree = renderer.create(<EntryPoint />).toJSON();
	expect(tree).toMatchSnapshot();
});
