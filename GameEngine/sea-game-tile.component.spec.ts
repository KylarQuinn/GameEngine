import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaGameTileComponent } from './sea-game-tile.component';

describe('SeaGameTileComponent', () => {
  let component: SeaGameTileComponent;
  let fixture: ComponentFixture<SeaGameTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaGameTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaGameTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
