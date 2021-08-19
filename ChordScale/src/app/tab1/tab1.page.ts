import { Component } from '@angular/core';
import * as keyDict from '../keyDict.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  getChord(keyChoice, chordType) {
    let data;
    switch (chordType) {
        case 'maj':
            data = this.majorChord(keyChoice);
            break;
        case 'min':
            data = this.minorChord(keyChoice);
            break;
        case 'dom':
            data = this.domChord(keyChoice);
            break;
        case 'half':
            data = this.halfDimChord(keyChoice);
            break;
        case 'full':
            data = this.fullDimChord(keyChoice);
            break;
        default:
            data = null;
            break;
    }
    return data;
  }

  majorChord(keyChoice) {
    return {
        name: `${keyChoice}maj7`,
        chordScale: `${keyChoice} Major Scale`,
        scale: [keyDict[keyChoice]['1'], keyDict[keyChoice]['2'], keyDict[keyChoice]['3'], keyDict[keyChoice]['4'], keyDict[keyChoice]['5'], keyDict[keyChoice]['6'], keyDict[keyChoice]['7']],
        chord_guide_tone: {
            "name": `${keyChoice} Major Chord/Guide Tones (1, 3, 5, 7)`,
            "keys": [keyDict[keyChoice]['1'], keyDict[keyChoice]['3'], keyDict[keyChoice]['5'], keyDict[keyChoice]['7']]
        },
        extensions: {
            "name": `9, 13`,
            "keys": [keyDict[keyChoice]['2'], keyDict[keyChoice]['6']]
        },
        extra_extensions: [
            {
                "name": `${keyChoice} Lydian Scale`,
                "keys": [keyDict[keyChoice]['1'], keyDict[keyChoice]['2'], keyDict[keyChoice]['3'], keyDict[keyChoice]['b5'], keyDict[keyChoice]['5'], keyDict[keyChoice]['6'], keyDict[keyChoice]['7']]
            },
            {
                "name": `Relative Minor Scale`,
                "keys": [keyDict[keyChoice]['6'], keyDict[keyChoice]['7'], keyDict[keyChoice]['1'], keyDict[keyChoice]['2'], keyDict[keyChoice]['3'], keyDict[keyChoice]['4'], keyDict[keyChoice]['5']]
            },
           {
                "name": `#11`,
                "keys": [keyDict[keyChoice]["b5"]]
            }
        ],
        notes_to_avoid: {
            "name": `b3, 4, b7`,
            "keys": [keyDict[keyChoice]["b3"], keyDict[keyChoice]["4"], keyDict[keyChoice]["b7"]]
      }
    }
  }

  minorChord(keyChoice) {
    return {
        name: `${keyChoice}min7`,
        chordScale: `${keyChoice} (Dorian) Minor Scale`,
        scale: [keyDict[keyChoice]["1"], keyDict[keyChoice]["2"], keyDict[keyChoice]["b3"], keyDict[keyChoice]["4"], keyDict[keyChoice]["5"], keyDict[keyChoice]["6"], keyDict[keyChoice]["b7"]],
        chord_guide_tone: {
            "name": `${keyChoice} Minor Chord/Guide Tones (1, b3, 5, b7)`,
            "keys": [keyDict[keyChoice]["1"], keyDict[keyChoice]["b3"], keyDict[keyChoice]["5"], keyDict[keyChoice]["b7"]]
        },
        extensions: {
            "name": "9, 11, 13",
            "keys": [keyDict[keyChoice]['2'], keyDict[keyChoice]["4"], keyDict[keyChoice]['6']]
        },
        extra_extensions: null,
        notes_to_avoid: {
            "name": "3",
            "keys": [keyDict[keyChoice]["3"]]
        }
    }
  }

  domChord(keyChoice) {
    return {
        name: `${keyChoice}7`,
        chordScale: `${keyChoice} Mixolydian Scale`,
        scale: [keyDict[keyChoice]["1"], keyDict[keyChoice]["2"], keyDict[keyChoice]["3"], keyDict[keyChoice]["4"], keyDict[keyChoice]["5"], keyDict[keyChoice]["6"], keyDict[keyChoice]["b7"]],
        chord_guide_tone: {
            "name": `${keyChoice} Dominant Chord/Guide Tones (1, 3, 5, b7)`,
            "keys": [keyDict[keyChoice]["1"], keyDict[keyChoice]["3"], keyDict[keyChoice]["5"], keyDict[keyChoice]["b7"]]
        },
        extensions: {
            "name": `9, 13`,
            "keys": [keyDict[keyChoice]['2'], keyDict[keyChoice]['6']]
        },
        extra_extensions: [
            {
                "name": `${keyChoice} Lydian Dominant Scale`,
                "keys": [keyDict[keyChoice]["1"], keyDict[keyChoice]["2"], keyDict[keyChoice]["3"], keyDict[keyChoice]["b5"], keyDict[keyChoice]["5"], keyDict[keyChoice]["6"], keyDict[keyChoice]["b7"]]
            },
            {
                "name": `${keyChoice} Half-Whole Diminished Scale`,
                "keys": [keyDict[keyChoice]["1"], keyDict[keyChoice]["b2"], keyDict[keyChoice]["b3"], keyDict[keyChoice]["3"], keyDict[keyChoice]["b5"], keyDict[keyChoice]["5"], keyDict[keyChoice]["6"], keyDict[keyChoice]["b7"]]
            },
            {
                "name": `b9, #9, 11, #11, #5/b13`,
                "keys": [keyDict[keyChoice]["b2"], keyDict[keyChoice]["b3"], keyDict[keyChoice]["4"], keyDict[keyChoice]["b5"], keyDict[keyChoice]["b6"]]
            }
        ],
        notes_to_avoid: {
            "name": `7`,
            "keys": [keyDict[keyChoice]["7"]]
        }
    }
  }

  halfDimChord(keyChoice) {
    return {
        name: `${keyChoice}min7b5`,
        chordScale: `${keyChoice} Half-Whole Dinimished Scale`,
        scale: [keyDict[keyChoice]["1"], keyDict[keyChoice]["b2"], keyDict[keyChoice]["b3"], keyDict[keyChoice]["3"], keyDict[keyChoice]["b5"], keyDict[keyChoice]["5"], keyDict[keyChoice]["6"], keyDict[keyChoice]["b7"]],
        chord_guide_tone: {
            "name": `${keyChoice} Diminished Chord/Guide Tones (1, b3, b5, b7)`,
            "keys": [keyDict[keyChoice]["1"], keyDict[keyChoice]["b3"], keyDict[keyChoice]["b5"], keyDict[keyChoice]["b7"]]
        },
        extensions: null,
        extra_extensions: null,
        notes_to_avoid: {
            "name": `3, 7`,
            "keys": [keyDict[keyChoice]["3"], keyDict[keyChoice]["7"]]
        }
    }
  }

  fullDimChord(keyChoice) {
    return {
        name: `${keyChoice}dim7`,
        chordScale: `${keyChoice} Whole-Half Dinimished Scale`,
        scale: [keyDict[keyChoice]["1"], keyDict[keyChoice]["2"], keyDict[keyChoice]["b3"], keyDict[keyChoice]["4"], keyDict[keyChoice]["b5"], keyDict[keyChoice]["b6"], keyDict[keyChoice]["6"], keyDict[keyChoice]["7"]],
        chord_guide_tone: {
            "name": `${keyChoice} Diminished Chord/Guide Tones (1, b3, b5, bb7)`,
            "keys": [keyDict[keyChoice]["1"], keyDict[keyChoice]["b3"], keyDict[keyChoice]["b5"], keyDict[keyChoice]["6"]]
        },
        extensions: null,
        extra_extensions: null,
        notes_to_avoid: {
            "name": `3, b7`,
            "keys": [keyDict[keyChoice]["3"], keyDict[keyChoice]["b7"]]
        }
    }
  }

}
