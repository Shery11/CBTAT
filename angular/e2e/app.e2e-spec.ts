import { AtrixdmsPage } from './app.po';

describe('atrixdms App', () => {
  let page: AtrixdmsPage;

  beforeEach(() => {
    page = new AtrixdmsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
