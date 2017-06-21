import { YukonTestPage } from './app.po';

describe('yukon-test App', () => {
  let page: YukonTestPage;

  beforeEach(() => {
    page = new YukonTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
