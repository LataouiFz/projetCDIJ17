import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBareComponent } from './menu-bare.component';

describe('MenuBareComponent', () => {
  let component: MenuBareComponent;
  let fixture: ComponentFixture<MenuBareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
