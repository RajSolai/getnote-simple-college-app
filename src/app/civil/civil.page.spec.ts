import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CivilPage } from './civil.page';

describe('CivilPage', () => {
  let component: CivilPage;
  let fixture: ComponentFixture<CivilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CivilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
