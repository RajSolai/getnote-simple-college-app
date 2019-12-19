import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Eie1Page } from './eie1.page';

describe('Eie1Page', () => {
  let component: Eie1Page;
  let fixture: ComponentFixture<Eie1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eie1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Eie1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
