import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckManageComponent } from './deck-manage.component';

describe('DeckManageComponent', () => {
  let component: DeckManageComponent;
  let fixture: ComponentFixture<DeckManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
