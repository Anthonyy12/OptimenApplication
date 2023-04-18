import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComentariosComponent } from './get-comentarios.component';

describe('GetComentariosComponent', () => {
  let component: GetComentariosComponent;
  let fixture: ComponentFixture<GetComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetComentariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
