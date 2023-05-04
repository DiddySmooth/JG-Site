import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryGalleryComponent } from './library-gallery.component';

describe('LibraryGalleryComponent', () => {
  let component: LibraryGalleryComponent;
  let fixture: ComponentFixture<LibraryGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
