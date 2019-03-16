import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadTileComponent } from './road-tile.component';

describe('RoadTileComponent', () => {
  let component: RoadTileComponent;
  let fixture: ComponentFixture<RoadTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
