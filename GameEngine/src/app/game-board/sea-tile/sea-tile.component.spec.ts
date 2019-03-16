import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaTileComponent } from './sea-tile.component';

describe('SeaTileComponent', () => {
  let component: SeaTileComponent;
  let fixture: ComponentFixture<SeaTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
