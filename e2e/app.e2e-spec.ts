import { NgplaygroundPage } from './app.po';

describe('ngplayground App', function() {
  let page: NgplaygroundPage;

  beforeEach(() => {
    page = new NgplaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
