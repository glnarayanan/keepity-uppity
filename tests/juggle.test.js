const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");

describe("Keepy Uppy helpers", () => {
  const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf-8");
  const dom = new JSDOM(html, { runScripts: "dangerously", pretendToBeVisual: true });
  const helpers = dom.window.__JUGGLE__;

  it("exposes helper functions", () => {
    expect(helpers).toBeDefined();
    expect(typeof helpers.clamp).toBe("function");
    expect(typeof helpers.computeHorizontalImpulse).toBe("function");
    expect(typeof helpers.isBallHit).toBe("function");
  });

  it("computes horizontal impulse based on click position", () => {
    const strength = 500;
    const radius = 20;
    const ballX = 100;
    const leftClick = helpers.computeHorizontalImpulse(ballX - radius, ballX, radius, strength);
    const rightClick = helpers.computeHorizontalImpulse(ballX + radius, ballX, radius, strength);
    const centerClick = helpers.computeHorizontalImpulse(ballX, ballX, radius, strength);

    expect(leftClick).toBeGreaterThan(0);
    expect(rightClick).toBeLessThan(0);
    expect(centerClick).toBe(0);
  });

  it("clamps horizontal impulse when clicking far from the ball", () => {
    const strength = 500;
    const radius = 20;
    const ballX = 100;
    const farLeft = helpers.computeHorizontalImpulse(ballX - radius * 4, ballX, radius, strength);
    const farRight = helpers.computeHorizontalImpulse(ballX + radius * 4, ballX, radius, strength);

    expect(farLeft).toBe(strength);
    expect(farRight).toBe(-strength);
  });

  it("detects when a click hits the ball", () => {
    const ball = { x: 200, y: 150, radius: 30 };

    expect(helpers.isBallHit(200, 150, ball)).toBe(true);
    expect(helpers.isBallHit(230, 150, ball)).toBe(true);
    expect(helpers.isBallHit(280, 150, ball)).toBe(false);
  });
});
