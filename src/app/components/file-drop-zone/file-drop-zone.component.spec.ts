import { ComponentFixture, TestBed } from '@angular/core/testing';

// noinspection ES6PreferShortImport
import { FileDropZoneComponent } from './file-drop-zone.component';

describe('FileDropZoneComponent', () => {
  let component: FileDropZoneComponent;
  let fixture: ComponentFixture<FileDropZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDropZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDropZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
