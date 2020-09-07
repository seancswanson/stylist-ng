import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitFormComponent } from './outfit-form.component';

describe('OutfitFormComponent', () => {
  let component: OutfitFormComponent;
  let fixture: ComponentFixture<OutfitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutfitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutfitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
