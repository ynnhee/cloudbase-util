const assert = require('assert');
const utils = require('../index.js');

describe('utils', function () {
  it('should have utils _', async function () {
    assert.ok(utils._);
  });
  it('should have utils moment', async function () {
    assert.ok(utils.moment);
  });
  it('should have utils format', async function () {
    assert.ok(utils.format);
  });
  it('should have utils bytesToSize', async function () {
    assert.ok(utils.bytesToSize);
  });
  it('should have utils convertTime', async function () {
    assert.ok(utils.convertTime);
  });
  it('should have utils compareVersion', async function () {
    assert.ok(utils.compareVersion);
  });
});