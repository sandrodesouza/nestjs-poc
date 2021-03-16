import { Test, TestingModule } from '@nestjs/testing';
import { EpivigilaService } from './epivigila.service';

describe('EpivigilaService', () => {
  let service: EpivigilaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EpivigilaService],
    }).compile();

    service = module.get<EpivigilaService>(EpivigilaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
