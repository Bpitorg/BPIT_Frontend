import { BpitPage } from './app.po';

describe('bpit App', () => {
  let page: BpitPage;

  beforeEach(() => {
    page = new BpitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
