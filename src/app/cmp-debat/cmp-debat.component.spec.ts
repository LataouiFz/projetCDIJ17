import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpDebatComponent } from './cmp-debat.component';

describe('CmpDebatComponent', () => {
  let component: CmpDebatComponent;
  let fixture: ComponentFixture<CmpDebatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpDebatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpDebatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
