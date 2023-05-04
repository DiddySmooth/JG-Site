import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookMenuComponent } from './edit-book-menu.component';

describe('EditBookMenuComponent', () => {
  let component: EditBookMenuComponent;
  let fixture: ComponentFixture<EditBookMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBookMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBookMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
