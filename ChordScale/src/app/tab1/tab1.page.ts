import { Component } from '@angular/core';
import { ChordServiceService } from '../chord-service.service';
import { MediaServiceService } from '../media-service.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  keyChoice: string
  chordType: string
  data

  constructor(public chordService: ChordServiceService, public mediaService: MediaServiceService) {}

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
    return this.data;
  }

  play() {
    this.mediaService.playTrack();
    console.log('Playing Track')
  }

  pause() {
    this.mediaService.pauseTrack();
    console.log('Track Paused')
  }

  stop() {
    this.mediaService.stopTrack();
    console.log('Track Stopped')
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
