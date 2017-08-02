import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadashComponent } from './loadash.component';

describe('LoadashComponent', () => {
  let component: LoadashComponent;
  let fixture: ComponentFixture<LoadashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
