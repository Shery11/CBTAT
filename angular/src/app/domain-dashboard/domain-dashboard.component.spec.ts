import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainDashboardComponent } from './domain-dashboard.component';

describe('DomainDashboardComponent', () => {
  let component: DomainDashboardComponent;
  let fixture: ComponentFixture<DomainDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
