import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartGraphComponent } from './start-graph.component';

describe('StartGraphComponent', () => {
  let component: StartGraphComponent;
  let fixture: ComponentFixture<StartGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
