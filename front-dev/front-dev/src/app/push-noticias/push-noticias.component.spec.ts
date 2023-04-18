import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNoticiasComponent } from './push-noticias.component';

describe('PushNoticiasComponent', () => {
  let component: PushNoticiasComponent;
  let fixture: ComponentFixture<PushNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PushNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
