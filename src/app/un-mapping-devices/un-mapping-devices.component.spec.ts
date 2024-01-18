import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnMappingDevicesComponent } from './un-mapping-devices.component';

describe('UnMappingDevicesComponent', () => {
  let component: UnMappingDevicesComponent;
  let fixture: ComponentFixture<UnMappingDevicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnMappingDevicesComponent]
    });
    fixture = TestBed.createComponent(UnMappingDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
