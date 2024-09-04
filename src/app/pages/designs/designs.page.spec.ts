import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsPage } from './designs.page';

describe('DesignsPage', () => {
  let component: DesignsPage;
  let fixture: ComponentFixture<DesignsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignsPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DesignsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
