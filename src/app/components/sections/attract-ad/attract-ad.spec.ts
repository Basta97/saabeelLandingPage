import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractAd } from './attract-ad';

describe('AttractAd', () => {
  let component: AttractAd;
  let fixture: ComponentFixture<AttractAd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttractAd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttractAd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
