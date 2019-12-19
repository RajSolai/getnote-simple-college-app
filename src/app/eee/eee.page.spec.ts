import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EeePage } from './eee.page';

describe('EeePage', () => {
  let component: EeePage;
  let fixture: ComponentFixture<EeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
