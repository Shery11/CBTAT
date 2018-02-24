import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainContactsComponent } from './domain-contacts.component';

describe('DomainContactsComponent', () => {
  let component: DomainContactsComponent;
  let fixture: ComponentFixture<DomainContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
