import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOmr } from './edit-omr';

describe('EditOmr', () => {
  let component: EditOmr;
  let fixture: ComponentFixture<EditOmr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOmr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOmr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
