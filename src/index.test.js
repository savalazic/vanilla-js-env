import jsdom from 'jsdom';
import fs from 'fs';

describe('test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
});

describe('index.html', () => {
  it('should say Users', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, (error, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).toEqual('Users');
      window.close();
    });
  });
});
