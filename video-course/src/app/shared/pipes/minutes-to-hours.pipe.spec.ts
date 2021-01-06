import { MinutesToHoursPipe } from './minutes-to-hours.pipe';

describe('MinutesToHoursPipe', () => {
  let pipe;
  beforeEach(() => {
    pipe = new MinutesToHoursPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should show transform min to hours and minutes', () => {
    expect(pipe.transform('90min')).toBe('1h 30min');
  });

  it('should return empty string', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should show transform number to hours and minutes', () => {
    expect(pipe.transform('120')).toBe('120');
  });

  it('should show return string when data does not follow time regex', () => {
    expect(pipe.transform('some text')).toBe('some text');
  });
});
