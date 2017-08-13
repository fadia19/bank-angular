import { BankAngularPage } from './app.po';

describe('bank-angular App', () => {
  let page: BankAngularPage;

  beforeEach(() => {
    page = new BankAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
