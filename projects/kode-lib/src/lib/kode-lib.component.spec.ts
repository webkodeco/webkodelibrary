import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodeLibComponent } from './kode-lib.component';

describe('KodeLibComponent', () => {
  let component: KodeLibComponent;
  let fixture: ComponentFixture<KodeLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KodeLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KodeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
