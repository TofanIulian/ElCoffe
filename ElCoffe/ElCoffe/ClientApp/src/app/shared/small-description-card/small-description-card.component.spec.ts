import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDescriptionCardComponent } from './small-description-card.component';

describe('SmallDescriptionCardComponent', () => {
  let component: SmallDescriptionCardComponent;
  let fixture: ComponentFixture<SmallDescriptionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallDescriptionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallDescriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
