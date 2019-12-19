import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mech4Page } from './mech4.page';

describe('Mech4Page', () => {
  let component: Mech4Page;
  let fixture: ComponentFixture<Mech4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mech4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mech4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
