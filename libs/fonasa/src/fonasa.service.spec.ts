import { Test, TestingModule } from '@nestjs/testing';
import { FonasaService } from './fonasa.service';

describe('FonasaService', () => {
  let service: FonasaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FonasaService],
    }).compile();

    service = module.get<FonasaService>(FonasaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
