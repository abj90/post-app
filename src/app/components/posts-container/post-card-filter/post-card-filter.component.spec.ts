import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardFilterComponent } from './post-card-filter.component';

describe('PostCardFilterComponent', () => {
  let component: PostCardFilterComponent;
  let fixture: ComponentFixture<PostCardFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
