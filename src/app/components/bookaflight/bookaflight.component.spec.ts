import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookaflightComponent } from './bookaflight.component';

describe('BookaflightComponent', () => {
  let component: BookaflightComponent;
  let fixture: ComponentFixture<BookaflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookaflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookaflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
