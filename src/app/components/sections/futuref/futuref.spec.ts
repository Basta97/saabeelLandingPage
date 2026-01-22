import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Futuref } from './futuref';

describe('Futuref', () => {
  let component: Futuref;
  let fixture: ComponentFixture<Futuref>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Futuref]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Futuref);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
