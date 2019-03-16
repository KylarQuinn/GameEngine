import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandGameTileComponent } from './land-game-tile.component';

describe('LandGameTileComponent', () => {
  let component: LandGameTileComponent;
  let fixture: ComponentFixture<LandGameTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandGameTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandGameTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
