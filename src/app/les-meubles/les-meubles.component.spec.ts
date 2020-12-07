import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesMeublesComponent } from './les-meubles.component';

describe('LesMeublesComponent', () => {
  let component: LesMeublesComponent;
  let fixture: ComponentFixture<LesMeublesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesMeublesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesMeublesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
