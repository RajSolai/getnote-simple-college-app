import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ece4Page } from './ece4.page';

describe('Ece4Page', () => {
  let component: Ece4Page;
  let fixture: ComponentFixture<Ece4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ece4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ece4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
