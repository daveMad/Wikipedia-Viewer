import { WikiViewerAppPage } from './app.po';

describe('wiki-viewer-app App', function() {
  let page: WikiViewerAppPage;

  beforeEach(() => {
    page = new WikiViewerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
