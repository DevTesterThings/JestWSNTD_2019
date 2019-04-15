import React from "react";
import Button from "./button";
import renderer from "react-test-renderer";

it("react component snapshot", () => {
  const tree = renderer.create( <
    Button isDisabled onClick = {
      () => console.log("hello")
    }
    className = "fancy button" /
    > ).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <button
      className="fancy button"
      disabled={true}
      onClick={[Function]}
    />
  `);
});