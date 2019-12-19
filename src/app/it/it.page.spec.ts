import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItPage } from './it.page';

describe('ItPage', () => {
  let component: ItPage;
  let fixture: ComponentFixture<ItPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
