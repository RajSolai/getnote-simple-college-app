import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mech3Page } from './mech3.page';

describe('Mech3Page', () => {
  let component: Mech3Page;
  let fixture: ComponentFixture<Mech3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mech3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mech3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
