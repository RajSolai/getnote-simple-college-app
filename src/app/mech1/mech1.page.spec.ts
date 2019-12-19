import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mech1Page } from './mech1.page';

describe('Mech1Page', () => {
  let component: Mech1Page;
  let fixture: ComponentFixture<Mech1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mech1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mech1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
