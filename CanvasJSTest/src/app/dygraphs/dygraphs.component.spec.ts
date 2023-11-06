import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DygraphsComponent } from './dygraphs.component';

describe('DygraphsComponent', () => {
  let component: DygraphsComponent;
  let fixture: ComponentFixture<DygraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DygraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DygraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
