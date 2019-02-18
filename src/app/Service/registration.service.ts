import { Injectable } from '@angular/core';
import {Player} from '../Class/player';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor() { }

  getPlayer(): String {
    return Player.toString();
  }

  
}
