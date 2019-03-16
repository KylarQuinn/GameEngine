import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandTileComponent } from './land-tile.component';

describe('LandTileComponent', () => {
  let component: LandTileComponent;
  let fixture: ComponentFixture<LandTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
