import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MechPage } from './mech.page';

describe('MechPage', () => {
  let component: MechPage;
  let fixture: ComponentFixture<MechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
