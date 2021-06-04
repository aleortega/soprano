describe('serverBuilder should', () => {
  const sut = require('./../src/serverBuilder');

  test.skip('expose a build function', () => {
    expect(sut).toHaveProperty('build');
  });
});
