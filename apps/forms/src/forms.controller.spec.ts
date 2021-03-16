import { Test, TestingModule } from '@nestjs/testing';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';

describe('FormsController', () => {
  let formsController: FormsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FormsController],
      providers: [FormsService],
    }).compile();

    formsController = app.get<FormsController>(FormsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(formsController.getHello()).toBe('Hello World!');
    });
  });
});
