import { SdnNg2AssignmentPage } from './app.po';

describe('sdn-ng2-assignment App', function() {
  let page: SdnNg2AssignmentPage;

  beforeEach(() => {
    page = new SdnNg2AssignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
