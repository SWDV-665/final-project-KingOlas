import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Howl } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  constructor(private media:Media) {
    console.log('Media Service Running')
  }
   
  keyChoice: string
  chordType: string
  location: string

  file: MediaObject
  player: Howl

  // used to get specific file-path according to keyChoice and chordType //
  getTrack(keyChoice: string, chordType: string, location: string) {
    console.log('Getting Chord Audio: ' + keyChoice + ' ' + chordType)
    this.file = this.media.create(location)
    // switch (chordType) {
    //     case 'maj':
    //         this.file = this.media.create(`./assets/mp3s/${keyChoice} Major scale.mp3`);
    //         break;
    //     case 'min':
    //       this.file = this.media.create(`./assets/mp3s/${keyChoice} Minor scale.mp3`);
    //         break;
    //     case 'dom':
    //       this.file = this.media.create(`./assets/mp3s/${keyChoice} Mixolydian scale.mp3`);
    //         break;
    //     case 'half':
    //       this.file = this.media.create(`./assets/mp3s/${keyChoice} Half-Diminished scale.mp3`);
    //         break;
    //     case 'full':
    //       this.file = this.media.create(`./assets/mp3s/${keyChoice} Fully-Diminished scale.mp3`);
    //         break;
    //     default:
    //       this.file = null;
    //         break;
    // }    
    console.log('Successfully Loaded Audio from ' + location)
    return this.file
  }

  playTrack(keyChoice: string, chordType: string, location: string) {
    console.log('Getting Chord Audio: ' + keyChoice + ' ' + chordType)
    this.player = new Howl ({
      src: [location]
    })
    console.log('playing audio from ' + location)
    this.player.play()
  }

  stopTrack() {
    console.log('audio stopped')
    this.file.stop()
  }

}
