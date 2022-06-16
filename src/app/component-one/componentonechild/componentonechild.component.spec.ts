import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentonechildComponent } from './componentonechild.component';

describe('ComponentonechildComponent', () => {
  let component: ComponentonechildComponent;
  let fixture: ComponentFixture<ComponentonechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentonechildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentonechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
