import { Component } from '@angular/core';
import { ChordServiceService } from '../chord-service.service';
import { MediaServiceService } from '../media-service.service';
import { ContactService } from '../contact.service';
import { Media } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  keyChoice: string
  chordType: string
  location: string
  data

  constructor(public chordService: ChordServiceService, public mediaService: MediaServiceService, public contactService: ContactService) {}

  // main function switch for app - determines which keyDict array to pull from //
  getChord(keyChoice: string, chordType: string) {
    console.log('Getting Chord Data: ' + keyChoice + ' ' + chordType)
    switch (chordType) {
        case 'maj':
            this.data = this.chordService.majorChord(keyChoice);
            console.log(this.data)
            break;
        case 'min':
          this.data = this.chordService.minorChord(keyChoice);
          console.log(this.data)
            break;
        case 'dom':
          this.data = this.chordService.domChord(keyChoice);
          console.log(this.data)
            break;
        case 'half':
          this.data = this.chordService.halfDimChord(keyChoice);
          console.log(this.data)
            break;
        case 'full':
          this.data = this.chordService.fullDimChord(keyChoice);
          console.log(this.data)
            break;
        default:
          this.data = null;
            break;
    }
    // this.mediaService.getTrack(keyChoice, chordType, location)
    return this.data;
  }

  play(location) {
    this.mediaService.playTrack(this.keyChoice, this.chordType, location);
    console.log('Playing ')
  }

  stop() {
    this.mediaService.stopTrack();
    console.log(' Stopped')
  }

  // MP3 Audio Placeholder - more mp3 files will be added in future updates //
  playFalse() {
    this.contactService.mediaAlert();
    console.log('Track Not Created Yet')
  }

}
