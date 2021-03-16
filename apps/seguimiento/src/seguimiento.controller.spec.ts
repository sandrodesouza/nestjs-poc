import { Test, TestingModule } from '@nestjs/testing';
import { SeguimientoController } from './seguimiento.controller';
import { SeguimientoService } from './seguimiento.service';

describe('SeguimientoController', () => {
  let seguimientoController: SeguimientoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SeguimientoController],
      providers: [SeguimientoService],
    }).compile();

    seguimientoController = app.get<SeguimientoController>(SeguimientoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(seguimientoController.getHello()).toBe('Hello World!');
    });
  });
});
