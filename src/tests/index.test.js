import PromiseTimeout from './../index';

describe("PromiseTimeout", () => {
  it("returns the timeout value, when task takes longer than the timeout value", async () => {
    await PromiseTimeout(100, "#1", new Promise((resolve, reject) => {
      setTimeout(() => resolve("#2"), 200);
    })).catch(e => expect(e).toBe("#1"));
  });

  it("returns the task value when the timeout takes longer than the task", async () => {
    await PromiseTimeout(200, "#1", new Promise((resolve) => {
      setTimeout(() => resolve("#2"), 100);
    }))
      .then(r => expect(r).toBe("#2"))
      .catch(() => expect(1).toBe(2));
  });
});