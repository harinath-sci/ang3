import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ImageUploadService } from 'src/app/services/image-upload.service';
@Component({
  selector: 'app-fileu',
  templateUrl: './fileu.component.html',
  styleUrls: ['./fileu.component.css']
})
export class FileuComponent implements OnInit {
  user$ = this.auth.currentUser$
  constructor(
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }
  uploadFile(event: any,a: any) {
    const user = this.auth.currentUser$
    this.imageUploadService
      .uploadImage(event.target.files[0], `10thcertificate/user1`)
      .pipe(
        this.toast.observe({
          loading: 'Uploading profile image...',
          success: 'Image uploaded successfully',
          error: 'There was an error in uploading the image',
        }),
      )
      .subscribe();
  }
  uploadFile1(event: any,a: any) {
    const user = this.auth.currentUser$
    this.imageUploadService
      .uploadImage(event.target.files[0], `12thcertificate/user2`)
      .pipe(
        this.toast.observe({
          loading: 'Uploading profile image...',
          success: 'Image uploaded successfully',
          error: 'There was an error in uploading the image',
        }),
      )
      .subscribe();
  }
  uploadFile3(event: any,a: any) {
    const user = this.auth.currentUser$
    this.imageUploadService
      .uploadImage(event.target.files[0], `B.Tech/user3`)
      .pipe(
        this.toast.observe({
          loading: 'Uploading profile image...',
          success: 'Image uploaded successfully',
          error: 'There was an error in uploading the image',
        }),
      )
      .subscribe();
  }

}
