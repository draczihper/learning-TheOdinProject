import capitalize from "./capitalize";

test("capitalizes the first word", () => {
    expect(capitalize("john")).toBe("John")
});