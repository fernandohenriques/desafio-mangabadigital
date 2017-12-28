import React from "react";
import TestUtils from 'react-dom/test-utils';
import expect from "expect";
import jsdom from "mocha-jsdom";

//components for tests
import Title from "../src/components/atoms/Title";

//Create a DOM for tests
jsdom();

describe("Test atom component Title", () => {

  it("should return an h1 with 'teste' string", () => {

    const component = TestUtils.renderIntoDocument(<Title type="h1" text="Teste" />);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(component, "h1");
    expect(h1.textContent).toEqual("Teste");

  });

});
