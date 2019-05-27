import React from 'react';
import Button from "../../button";
import renderer from 'react-test-renderer';

test.skip('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Button
      isDisabled={true}
      onClick={ () => console.log("hello") }
      className="fancy button"
    />);
  expect(component.toJSON().props.className).toEqual('fancy button');
});
