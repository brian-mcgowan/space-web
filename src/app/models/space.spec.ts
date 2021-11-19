import { Space } from './space';

describe('Space', () => {
  it('should create an instance', () => {
    expect(new Space('Headquarters', 'A1', 'A1-123')).toBeTruthy();
  });
});
