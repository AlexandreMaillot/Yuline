import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDeckComponent } from './side-deck.component';

describe('SideDeckComponent', () => {
  let component: SideDeckComponent;
  let fixture: ComponentFixture<SideDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
