import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosValoresComponent } from './nuestros-valores.component';

describe('NuestrosValoresComponent', () => {
  let component: NuestrosValoresComponent;
  let fixture: ComponentFixture<NuestrosValoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestrosValoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
