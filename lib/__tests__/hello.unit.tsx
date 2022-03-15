const add = (a: number, b: number) => {
  return a + b;
};

describe('我的第一个测试示例', () => {
  it('add(1,2) 等于 3 ', function () {
    expect(add(1,2)).toEqual(3);
  });
});