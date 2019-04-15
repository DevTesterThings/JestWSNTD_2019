import React from "react";
import Button from "../Advanced - UI Component Test/button";
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';

configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

it("react component shallow render", () => {
  const button = mount(
    <Button
      isDisabled={true}
      onClick={ () => console.log("hello") }
      className="fancy button"
    />
  );
  expect(button.find('.fancy button')).to.be.disabled();
});
