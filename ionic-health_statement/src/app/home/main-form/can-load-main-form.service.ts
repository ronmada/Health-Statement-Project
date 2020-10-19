import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class CanLoadMainFormService implements CanLoad {
  constructor(private userService: UserService, private router: Router) {}

  public canLoad(): boolean {
    if (this.userService.isOkay) return true;
    this.router.navigate(['../']);
    return false;
  }
}
