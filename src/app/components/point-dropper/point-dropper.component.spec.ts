import { ComponentFixture, TestBed } from '@angular/core/testing';

// noinspection ES6PreferShortImport
import { PointDropperComponent } from './point-dropper.component';

describe('PointDropperComponent', () => {
  let component: PointDropperComponent;
  let fixture: ComponentFixture<PointDropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointDropperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointDropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
