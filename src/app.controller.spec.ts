import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();
  });

  describe('getHello', () => {
    it('should include "Service"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toContain('Service');
    });
  });
});
