import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  constructor(private media:Media) {
    console.log('Media Service Running')
  }
   
  keyChoice: string
  chordType: string

  file: MediaObject

  getTrack(keyChoice: string, chordType: string) {
    console.log('Getting Chord Audio: ' + keyChoice + ' ' + chordType)
    switch (chordType) {
        case 'maj':
            this.file = this.media.create(`./assets/mp3s/${keyChoice} Major scale.mp3`);
            console.log(this.file)
            break;
        case 'min':
          this.file = this.media.create(`./assets/mp3s/${keyChoice} Minor scale.mp3`);
          console.log(this.file)
            break;
        case 'dom':
          this.file = this.media.create(`./assets/mp3s/${keyChoice} Mixolydian scale.mp3`);
          console.log(this.file)
            break;
        case 'half':
          this.file = this.media.create(`./assets/mp3s/${keyChoice} Half-Diminished scale.mp3`);
          console.log(this.file)
            break;
        case 'full':
          this.file = this.media.create(`./assets/mp3s/${keyChoice} Fully-Diminished scale.mp3`);
          console.log(this.file)
            break;
        default:
          this.file = null;
            break;
    }
    return this.file;
  }

  playTrack() {
    console.log('playing ' + this.file)
    this.file.play()
  }

  stopTrack() {
    console.log(this.file + ' stopped')
    this.file.stop()
  }

}
