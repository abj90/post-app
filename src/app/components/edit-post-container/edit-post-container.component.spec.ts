import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostContainerComponent } from './edit-post-container.component';

describe('EditPostContainerComponent', () => {
  let component: EditPostContainerComponent;
  let fixture: ComponentFixture<EditPostContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPostContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
