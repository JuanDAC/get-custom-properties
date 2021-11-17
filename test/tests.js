import getCSSCustomPropFrom from "../index.js";
import { rootCustoms } from "./data.js"

const chai = window.chai
const expect = chai.expect

describe('getCelcius', () => {
  it('should convert farenheit to celcius for all values in an array', () => {
    expect(getCSSCustomPropFrom(":root")).to.have.lengthOf(rootCustoms.length);
  });
});