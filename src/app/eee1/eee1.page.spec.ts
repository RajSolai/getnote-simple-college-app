import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Eee1Page } from './eee1.page';

describe('Eee1Page', () => {
  let component: Eee1Page;
  let fixture: ComponentFixture<Eee1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eee1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Eee1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
