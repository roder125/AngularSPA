import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMountainsComponent } from './show-mountains.component';

describe('ShowMountainsComponent', () => {
  let component: ShowMountainsComponent;
  let fixture: ComponentFixture<ShowMountainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMountainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMountainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
