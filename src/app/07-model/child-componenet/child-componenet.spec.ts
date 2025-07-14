import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponenet } from './child-componenet';

describe('ChildComponenet', () => {
  let component: ChildComponenet;
  let fixture: ComponentFixture<ChildComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponenet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
