import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSampleComponent } from './third-sample.component';

describe('ThirdSampleComponent', () => {
  let component: ThirdSampleComponent;
  let fixture: ComponentFixture<ThirdSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
