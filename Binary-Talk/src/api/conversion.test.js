import * as api from "../api/conversion";

test("Testing : convert A to Binary", () => {
	expect(api._utf8ToBin("A")).toBe("01000001");
});

test("Testing : convert 01000001 back to A", () => {
	expect(api._binaryToTxt("01000001")).toBe("A");
});
