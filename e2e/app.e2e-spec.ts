import { Login5Page } from './app.po';

describe('login5 App', () => {
  let page: Login5Page;

  beforeEach(() => {
    page = new Login5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
