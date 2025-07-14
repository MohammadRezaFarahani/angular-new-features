import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterInput } from './router-input';

describe('RouterInput', () => {
  let component: RouterInput;
  let fixture: ComponentFixture<RouterInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
