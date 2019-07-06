import { LabourDesignToolPage } from './app.po';

describe('labour-design-tool App', () => {
  let page: LabourDesignToolPage;

  beforeEach(() => {
    page = new LabourDesignToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
