import { MadamedeliaPage } from './app.po';

describe('madamedelia App', function() {
  let page: MadamedeliaPage;

  beforeEach(() => {
    page = new MadamedeliaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
