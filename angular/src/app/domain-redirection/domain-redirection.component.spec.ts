import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainRedirectionComponent } from './domain-redirection.component';

describe('DomainRedirectionComponent', () => {
  let component: DomainRedirectionComponent;
  let fixture: ComponentFixture<DomainRedirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainRedirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainRedirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
