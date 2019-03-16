import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadGameTileComponent } from './road-game-tile.component';

describe('RoadGameTileComponent', () => {
  let component: RoadGameTileComponent;
  let fixture: ComponentFixture<RoadGameTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadGameTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadGameTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
