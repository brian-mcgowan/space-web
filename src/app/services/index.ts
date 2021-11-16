import { CsvParserService } from './csv-parser.service';
import { PointService } from './point.service';
import { SpaceDataService } from './space-data.service';

export const services: any[] = [
  CsvParserService,
  PointService,
  SpaceDataService
];

export * from './csv-parser.service'
export * from './point.service';
export * from './space-data.service';
