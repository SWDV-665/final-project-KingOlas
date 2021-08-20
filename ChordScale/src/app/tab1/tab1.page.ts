import { Component } from '@angular/core';
import { ChordServiceService } from '../chord-service.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public chordService: ChordServiceService) {}

  getChord(keyChoice: string, chordType: string) {
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

}
