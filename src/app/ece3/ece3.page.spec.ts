import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ece3Page } from './ece3.page';

describe('Ece3Page', () => {
  let component: Ece3Page;
  let fixture: ComponentFixture<Ece3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ece3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ece3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
