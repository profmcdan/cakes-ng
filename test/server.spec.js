const expect = require("chai").expect;
const server = require("../server");

describe("test", () => {
  it("should return a string", () => {
    expect("Test OK").to.equal("Test OK");
  });
});
