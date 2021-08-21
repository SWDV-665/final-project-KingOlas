import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  constructor(private nativeAudio: NativeAudio) {
    console.log('Media Service Running')
    this.nativeAudio.preloadSimple('uniqueId1', 'ChordScale/src/assets/Track 07 - SurfofDeath.m4a')
   }
   
  file // ChordScale/src/assets/Track 07 - SurfofDeath.m4a

  playTrack() {
    console.log('playing ' + this.file)
    this.nativeAudio.play('uniqueId1');
  }

  pauseTrack() {
    console.log(this.file + ' paused')
    this.file.pause();
  }

  stopTrack() {
    console.log(this.file + ' stopped')
    this.nativeAudio.stop('uniqueId1')
  }

  // this.nativeAudio.preloadSimple('uniqueId1', 'ChordScale/src/assets/Track 07 - SurfofDeath.m4a').then(onSuccess, onError);
  // this.nativeAudio.preloadComplex('uniqueId2', 'ChordScale/src/assets/Track 07 - SurfofDeath.m4a', 1, 1, 0).then(onSuccess, onError);

  // this.nativeAudio.play('uniqueId1').then(onSuccess, onError);

  // // can optionally pass a callback to be called when the file is done playing
  // this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));

  // this.nativeAudio.loop('uniqueId2').then(onSuccess, onError);

  // this.nativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess,onError);

  // this.nativeAudio.stop('uniqueId1').then(onSuccess,onError);

  // this.nativeAudio.unload('uniqueId1').then(onSuccess,onError);

}
