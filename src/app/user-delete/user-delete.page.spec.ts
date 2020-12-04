import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserDeletePage } from './user-delete.page';

describe('UserDeletePage', () => {
  let component: UserDeletePage;
  let fixture: ComponentFixture<UserDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
