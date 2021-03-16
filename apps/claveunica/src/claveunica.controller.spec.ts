import { Test, TestingModule } from '@nestjs/testing';
import { ClaveunicaController } from './claveunica.controller';
import { ClaveunicaService } from './claveunica.service';

describe('ClaveunicaController', () => {
  let claveunicaController: ClaveunicaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClaveunicaController],
      providers: [ClaveunicaService],
    }).compile();

    claveunicaController = app.get<ClaveunicaController>(ClaveunicaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(claveunicaController.getHello()).toBe('Hello World!');
    });
  });
});
