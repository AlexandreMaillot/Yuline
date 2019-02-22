import { TestBed } from '@angular/core/testing';

import { DeckService } from './deck.service';

describe('DeckService', () => {

  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: DeckService = TestBed.get(DeckService);
    expect(service).toBeTruthy();

  });

  it('should return a list of deck', () => {
    const service: DeckService = TestBed.get(DeckService);
    //expect(service.getDecks).toHaveBeenCalledWith(player);
    //expect(service.getDecks.).toBe(Array);


  });


});
