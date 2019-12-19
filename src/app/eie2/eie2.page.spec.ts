import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Eie2Page } from './eie2.page';

describe('Eie2Page', () => {
  let component: Eie2Page;
  let fixture: ComponentFixture<Eie2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eie2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Eie2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
