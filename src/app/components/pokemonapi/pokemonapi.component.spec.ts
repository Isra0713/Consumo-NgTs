import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonapiComponent } from './pokemonapi.component';

describe('PokemonapiComponent', () => {
  let component: PokemonapiComponent;
  let fixture: ComponentFixture<PokemonapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
