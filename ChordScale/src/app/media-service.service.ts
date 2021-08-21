import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  constructor(private media: Media) { }

  file: MediaObject = this.media.create('ChordScale/src/assets/Track 07 - SurfofDeath.m4a');

  playTrack() {
    this.file.play();
  }

  pauseTrack() {
    this.file.pause();
  }

  stopTrack() {
    this.file.stop();
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
