import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EcePage } from './ece.page';

describe('EcePage', () => {
  let component: EcePage;
  let fixture: ComponentFixture<EcePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EcePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
