import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraDeckComponent } from './extra-deck.component';

describe('ExtraDeckComponent', () => {
  let component: ExtraDeckComponent;
  let fixture: ComponentFixture<ExtraDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
