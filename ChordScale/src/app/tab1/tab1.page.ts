import { Component } from '@angular/core';
import { ChordServiceService } from '../chord-service.service';
import { Media, MediaObject } from '@ionic-native/media/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public chordService: ChordServiceService, private media: Media) {}

  getChord(keyChoice: string, chordType: string) {
    console.log('Getting Chord Data')
    let data;
    switch (chordType) {
        case 'maj':
            data = this.chordService.majorChord(keyChoice);
            break;
        case 'min':
            data = this.chordService.minorChord(keyChoice);
            break;
        case 'dom':
            data = this.chordService.domChord(keyChoice);
            break;
        case 'half':
            data = this.chordService.halfDimChord(keyChoice);
            break;
        case 'full':
            data = this.chordService.fullDimChord(keyChoice);
            break;
        default:
            data = null;
            break;
    }
    return data;
  }

  // playTrack() {
  // const file: MediaObject = this.media.create('ChordScale/src/assets/Track 07 - SurfofDeath.m4a');

  // // to listen to plugin events:

  // file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

  // file.onSuccess.subscribe(() => console.log('Action is successful'));

  // file.onError.subscribe(error => console.log('Error!', error));

  // // play the file
  // file.play();

  // // pause the file
  // file.pause();

  // // get current playback position
  // file.getCurrentPosition().then((position) => {
  //   console.log(position);
  // });

  // // get file duration
  // let duration = file.getDuration();
  // console.log(duration);

  // // skip to 10 seconds (expects int value in ms)
  // file.seekTo(10000);

  // // stop playing the file
  // file.stop();

  // // release the native audio resource
  // // Platform Quirks:
  // // iOS simply create a new instance and the old one will be overwritten
  // // Android you must call release() to destroy instances of media when you are done
  // file.release();
  // }



}
