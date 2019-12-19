import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cse1Page } from './cse1.page';

describe('Cse1Page', () => {
  let component: Cse1Page;
  let fixture: ComponentFixture<Cse1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cse1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cse1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
