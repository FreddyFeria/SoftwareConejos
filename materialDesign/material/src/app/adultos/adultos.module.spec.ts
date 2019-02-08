import { AdultosModule } from './adultos.module';

describe('RegistroModule', () => {
  let registroModule: AdultosModule;

  beforeEach(() => {
    registroModule = new AdultosModule();
  });

  it('should create an instance', () => {
    expect(registroModule).toBeTruthy();
  });
});
