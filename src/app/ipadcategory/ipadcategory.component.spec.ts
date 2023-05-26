import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadcategoryComponent } from './ipadcategory.component';

describe('IpadcategoryComponent', () => {
  let component: IpadcategoryComponent;
  let fixture: ComponentFixture<IpadcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpadcategoryComponent]
    });
    fixture = TestBed.createComponent(IpadcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
