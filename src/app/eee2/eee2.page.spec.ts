import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Eee2Page } from './eee2.page';

describe('Eee2Page', () => {
  let component: Eee2Page;
  let fixture: ComponentFixture<Eee2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eee2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Eee2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
