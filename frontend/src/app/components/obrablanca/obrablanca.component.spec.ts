import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrablancaComponent } from './obrablanca.component';

describe('ObrablancaComponent', () => {
  let component: ObrablancaComponent;
  let fixture: ComponentFixture<ObrablancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObrablancaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObrablancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
