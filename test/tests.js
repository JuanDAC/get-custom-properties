import getCSSCustomPropFrom from "../index.js";
import { rootCustoms, elementsWithCustoms } from "./data.js"

const chai = window.chai
const expect = chai.expect

describe('getCSSCustomPropFrom: String -> [String] ', () => {
  it('Should get the custom properties of :root element in  array of strings', () => {
    expect(getCSSCustomPropFrom(":root")).to.have.lengthOf(Object.entries(rootCustoms).length);
  });
  elementsWithCustoms.forEach(({ id, style }) => {
    it(`Should get the custom properties of #${id} element in  array of strings`, () => {
      expect(getCSSCustomPropFrom(`#${id}`)).to.have.lengthOf(Object.entries(style).length);
    });
  });
});
