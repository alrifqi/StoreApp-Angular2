import { Learning3Page } from './app.po';

describe('learning3 App', function() {
  let page: Learning3Page;

  beforeEach(() => {
    page = new Learning3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
