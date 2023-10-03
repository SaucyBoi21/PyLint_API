import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputButtonComponent } from './output-button.component';

describe('OutputButtonComponent', () => {
  let component: OutputButtonComponent;
  let fixture: ComponentFixture<OutputButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputButtonComponent]
    });
    fixture = TestBed.createComponent(OutputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
