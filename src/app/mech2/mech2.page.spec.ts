import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mech2Page } from './mech2.page';

describe('Mech2Page', () => {
  let component: Mech2Page;
  let fixture: ComponentFixture<Mech2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mech2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mech2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
