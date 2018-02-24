import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNewComponent } from './sub-new.component';

describe('SubNewComponent', () => {
  let component: SubNewComponent;
  let fixture: ComponentFixture<SubNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
