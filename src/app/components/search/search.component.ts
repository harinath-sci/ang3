import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { ProfileUser } from 'src/app/user.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ImageUploadService } from 'src/app/services/image-upload.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user$ = this.userservice.currentUserProfile$;
  profileForm = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl(''),
    name: new FormControl(''),
    board: new FormControl(''),

  });
  constructor(
    private authservice : AuthService,
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private userservice : UsersService
  ) { }

  ngOnInit(): void {
    this.userservice.currentUserProfile$
      .pipe(untilDestroyed(this), tap(console.log))
      .subscribe((user) => {
        this.profileForm.patchValue({ ...user });
      });
  }
  uploadFile(event: any, { uid }: ProfileUser) {
    this.imageUploadService
      .uploadImage(event.target.files[0], `images/profile/${uid}`)
      .pipe(
        this.toast.observe({
          loading: 'Uploading profile image...',
          success: 'Image uploaded successfully',
          error: 'There was an error in uploading the image',
        }),
      )
      .subscribe();
  }

  saveProfile() {
    const profileData = this.profileForm.value;
    this.userservice
      .updateUser(profileData)
      .pipe(
        this.toast.observe({
          loading: 'Saving profile data...',
          success: 'Profile updated successfully',
          error: 'There was an error in updating the profile',
        })
      )
      .subscribe();
  }

}
