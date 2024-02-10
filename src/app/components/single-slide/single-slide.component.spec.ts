import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlideComponent } from './single-slide.component';

describe('SingleSlideComponent', () => {
  let component: SingleSlideComponent;
  let fixture: ComponentFixture<SingleSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
