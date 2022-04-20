import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPostContainerComponent } from './detail-post-container.component';

describe('DetailPostContainerComponent', () => {
  let component: DetailPostContainerComponent;
  let fixture: ComponentFixture<DetailPostContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPostContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
