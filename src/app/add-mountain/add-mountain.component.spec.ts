import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMountainComponent } from './add-mountain.component';

describe('AddMountainComponent', () => {
  let component: AddMountainComponent;
  let fixture: ComponentFixture<AddMountainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMountainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
