import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PylintOutputComponent } from './pylint-output.component';

describe('PylintOutputComponent', () => {
  let component: PylintOutputComponent;
  let fixture: ComponentFixture<PylintOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PylintOutputComponent]
    });
    fixture = TestBed.createComponent(PylintOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
