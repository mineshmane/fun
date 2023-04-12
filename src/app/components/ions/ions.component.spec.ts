import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonsComponent } from './ions.component';

describe('IonsComponent', () => {
  let component: IonsComponent;
  let fixture: ComponentFixture<IonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
