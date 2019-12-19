import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsemainPage } from './csemain.page';

describe('CsemainPage', () => {
  let component: CsemainPage;
  let fixture: ComponentFixture<CsemainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsemainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsemainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
