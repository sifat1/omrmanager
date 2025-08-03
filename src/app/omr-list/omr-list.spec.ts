import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmrList } from './omr-list';

describe('OmrList', () => {
  let component: OmrList;
  let fixture: ComponentFixture<OmrList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmrList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmrList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
