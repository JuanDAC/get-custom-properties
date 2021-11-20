import { getCustomPropertiesRegisted, getCustomProperties } from "../index.js";
import { rootCustoms, elementsWithCustoms, customPropertiesRegisted } from "./data.js"

const chai = window.chai;
const expect = chai.expect;

describe('getCustomProperties: String → [String] ', () => {
  it('Should get the custom properties of :root element in  array of strings', () => {
    expect(getCustomProperties(":root")).to.have.lengthOf(Object.entries(rootCustoms).length);
  });
  elementsWithCustoms.forEach(({ id, style, testOutput }) => {
    it(`Should get the custom properties of #${id} element in  array of strings`, () => {
      expect(getCustomProperties(`#${id}`)).to.have.lengthOf(
        testOutput != undefined
          ? testOutput
          : Object.entries(style).length
      );
    });
  });
});

describe('getCustomPropertiesRegisted: String → [String] ', () => {
  customPropertiesRegisted.forEach(({ id, style }) => {
    if (id.includes('test-zero-register')) {
      try {
        getCustomPropertiesRegisted(`#${id}`);
      } catch (e) {
        it(`Should get the custom properties of #${id} element in  array of strings`, () => {
          expect(e.message).equal("don't have a content in style");
        });
      }
      return;
    }
    it(`Should get the custom properties of #${id} element in  array of strings`, () => {
      expect(getCustomPropertiesRegisted(`#${id}`)).to.have.lengthOf(style.length);
    });
  });
});