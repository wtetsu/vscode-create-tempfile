import * as assert from "assert";
import * as utils from "../../utils";

suite("utils", () => {
  test("utils", () => {
    const time = new Date();
    const params = utils.makePathParameters(time);

    assert.strictEqual(typeof params.YYYY, "string");
    assert.strictEqual(typeof params.MM, "string");
    assert.strictEqual(typeof params.DD, "string");
    assert.strictEqual(typeof params.HH, "string");
    assert.strictEqual(typeof params.mm, "string");
    assert.strictEqual(typeof params.ss, "string");
    assert.strictEqual(typeof params.SSS, "string");
    assert.strictEqual(params.YYYY, time.getFullYear().toString());
  });
});
