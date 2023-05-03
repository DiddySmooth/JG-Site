import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookMenuComponent } from './add-book-menu.component';

describe('AddBookMenuComponent', () => {
  let component: AddBookMenuComponent;
  let fixture: ComponentFixture<AddBookMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
