import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ece1Page } from './ece1.page';

describe('Ece1Page', () => {
  let component: Ece1Page;
  let fixture: ComponentFixture<Ece1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ece1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ece1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
