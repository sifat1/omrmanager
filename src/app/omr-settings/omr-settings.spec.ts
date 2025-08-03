import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmrSettings } from './omr-settings';

describe('OmrSettings', () => {
  let component: OmrSettings;
  let fixture: ComponentFixture<OmrSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmrSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmrSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
