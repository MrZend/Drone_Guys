import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ImageCropperComponent } from './components/image-cropper/image-cropper.component';



@NgModule({
  exports: [AvatarComponent],
  imports: [
    CommonModule,
    AvatarComponent,
    ImageCropperComponent,
  ]
})
export class ProfileModule { }
