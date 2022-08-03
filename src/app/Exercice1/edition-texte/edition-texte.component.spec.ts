import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionTexteComponent } from './edition-texte.component';

describe('EditionTexteComponent', () => {
  let component: EditionTexteComponent;
  let fixture: ComponentFixture<EditionTexteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionTexteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionTexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
