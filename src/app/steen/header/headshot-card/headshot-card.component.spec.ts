import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadshotCardComponent } from './headshot-card.component';

describe('HeadshotCardComponent', () => {
  let component: HeadshotCardComponent;
  let fixture: ComponentFixture<HeadshotCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadshotCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadshotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
