import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EiePage } from './eie.page';

describe('EiePage', () => {
  let component: EiePage;
  let fixture: ComponentFixture<EiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
