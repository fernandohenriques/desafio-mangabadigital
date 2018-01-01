import React from "react";
import TestUtils from "react-dom/test-utils";
import jsdom  from "jsdom-global";
import expect from "expect";
import TestRenderer from "react-test-renderer";

//components for tests
import Link from "../src/components/atoms/Link";
import ButtonCircle from "../src/components/atoms/ButtonCircle";
import Title from "../src/components/atoms/Title";
import SearchInput from "../src/components/atoms/SearchInput";
import Collection from "../src/components/atoms/Collection";
import Item from "../src/components/atoms/CollectionItem";

//Create a DOM for tests
jsdom();

describe("Unit test for atoms components", () => {

  describe("Title", () => {

    it("should return an tag h1 if props.type = h1 and children equals 'Test'", () => {
      const component = TestRenderer.create(<Title type="h1" text="Test" />).toJSON();
      expect(component.type).toBe('h1');
      expect(component.children).toEqual(['Test']);
    });

  });

  describe("Link", () => {

    it("Check the tag a contain the same hash class generate by styled components", () => {
      const firstRender = TestUtils.renderIntoDocument(<Link>Teste First</Link>);
      const secondRender = TestUtils.renderIntoDocument(<Link>Teste Second</Link>);
      const aFirst = TestUtils.findRenderedDOMComponentWithTag(firstRender, "a");
      const aSecond = TestUtils.findRenderedDOMComponentWithTag(secondRender, "a");
      expect(aFirst.getAttribute("class")).toEqual(aSecond.getAttribute("class"));
    });

  });

  describe("ButtonCircle", () => {

    it("Checks if the generate tag by component equals div", () => {
      const component = TestRenderer.create(<ButtonCircle scale="1" />).toJSON();
      expect(component.type).toBe('div');
    });

  });

  describe("Collection", () => {

    it("Checks if the generate tag by component equals ul", () => {
      const component = TestRenderer.create(<Collection />).toJSON();
      expect(component.type).toBe('ul');
    });

  });

  describe("SearchInput", () => {

    it("should return an typed text of input after press enter", () => {
      var inputTest, textInput;
      const refFunc = input => { inputTest = input };
      const execKeyPress = e => { if(e.key === 'Enter') textInput = e.target.value; }

      const component = TestUtils.renderIntoDocument(<SearchInput opacity="1" inputRef={refFunc} onKeyPress={execKeyPress} />);

      const node = inputTest;
      node.value = 'Test';
      TestUtils.Simulate.change(node);
      TestUtils.Simulate.keyPress(node, {key: "Enter", keyCode: 13, which: 13});

      expect(textInput).toEqual(node.value);

    });
  });

  describe("CollectionItem", () => {

    it("should return an specifics tags children", () => {
      let componentImg, componentSpan, componentA;
      const componentItem = TestRenderer.create(<Item poster="http://mock.site.com/img.jpg" title="Teste" type="#" year="#" imdbID="#" />).toJSON();
      const li = componentItem.children;

      for (let i = 0; i < li.length; i++) {
        if(li[i].type == 'img') componentImg = li[i];
        if(li[i].type == 'span') componentSpan = li[i];
        if(li[i].type == 'a') componentA = li[i];
      }

      expect(componentItem.type).toBe('li');
      expect(componentImg.props.src).toBe('http://mock.site.com/img.jpg');
      expect(componentSpan.children).toEqual(["Teste"]);
      expect(componentA.props.target).toEqual("_blank");
    });

  });

});
