import { WebAppPage } from './app.po';

describe('web-app App', () => {
  let page: WebAppPage;

  beforeEach(() => {
    page = new WebAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
