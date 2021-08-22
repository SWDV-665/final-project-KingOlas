import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  constructor(private media:Media) {
    console.log('Media Service Running')
   }
   

   file: MediaObject = this.media.create('./assets/example1.mp3');

  playTrack() {
    console.log('playing ' + this.file)
    this.file.play()
  }

  stopTrack() {
    console.log(this.file + ' stopped')
    this.file.stop()
  }

  }
