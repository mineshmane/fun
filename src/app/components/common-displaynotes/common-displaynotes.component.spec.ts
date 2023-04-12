import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDisplaynotesComponent } from './common-displaynotes.component';

describe('CommonDisplaynotesComponent', () => {
  let component: CommonDisplaynotesComponent;
  let fixture: ComponentFixture<CommonDisplaynotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonDisplaynotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonDisplaynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
