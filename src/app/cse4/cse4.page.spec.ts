import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cse4Page } from './cse4.page';

describe('Cse4Page', () => {
  let component: Cse4Page;
  let fixture: ComponentFixture<Cse4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cse4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cse4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
