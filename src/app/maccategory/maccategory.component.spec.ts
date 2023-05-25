import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaccategoryComponent } from './maccategory.component';

describe('MaccategoryComponent', () => {
  let component: MaccategoryComponent;
  let fixture: ComponentFixture<MaccategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaccategoryComponent]
    });
    fixture = TestBed.createComponent(MaccategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
