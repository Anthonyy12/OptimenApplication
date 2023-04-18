import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushEventosComponent } from './push-eventos.component';

describe('PushEventosComponent', () => {
  let component: PushEventosComponent;
  let fixture: ComponentFixture<PushEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
