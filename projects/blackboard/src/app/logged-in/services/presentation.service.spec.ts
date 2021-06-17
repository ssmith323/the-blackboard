import { Prenentation, PresentationService } from './presentation.service';

describe('PresentationService', () => {
  let service: PresentationService;

  beforeEach(() => {
    service = new PresentationService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set the values without youtubelink', () => {
    service.setValues({ presentor: 'Stephen', date: 'date' } as Prenentation);
    expect(service.presentor).toBe('Stephen');
    expect(service.date).toBe('date');
    expect(service.youtubeLink).toBeNull();
  });

  it('should set the values with youtubelink', () => {
    service.setValues({
      presentor: 'Stephen',
      date: 'date',
      youtubeLink: 'dQw4w9WgXcQ',
    } as Prenentation);
    expect(service.presentor).toBe('Stephen');
    expect(service.date).toBe('date');
    expect(service.youtubeLink).toBe('dQw4w9WgXcQ');
  });
});
