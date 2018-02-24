import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainJobsComponent } from './domain-jobs.component';

describe('DomainJobsComponent', () => {
  let component: DomainJobsComponent;
  let fixture: ComponentFixture<DomainJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
