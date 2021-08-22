import { Injectable } from '@angular/core';
import * as jsonData from './keyDict.json';

@Injectable({
  providedIn: 'root'
})
export class ChordServiceService {

  keyDict

  constructor() { 
    console.log('ChordService Running...')
    this.keyDict = jsonData['default']
  }

  majorChord(keyChoice: string) {
    console.log(keyChoice + ' Major Chord Data Returned')
    return {
        name: `${keyChoice}maj7`,
        chordScale: `${keyChoice} Major Scale`,
        scale: [this.keyDict[keyChoice]['1'], this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]['3'], this.keyDict[keyChoice]['4'], this.keyDict[keyChoice]['5'], this.keyDict[keyChoice]['6'], this.keyDict[keyChoice]['7']],
        scaleFile: `./assets/mp3s/${keyChoice} Major scale.mp3`,
        chord_guide_tone: {
            "name": `${keyChoice} Major Chord/Guide Tones (1, 3, 5, 7)`,
            "keys": [this.keyDict[keyChoice]['1'], this.keyDict[keyChoice]['3'], this.keyDict[keyChoice]['5'], this.keyDict[keyChoice]['7']]
        },
        extensions: {
            "name": `9, 13`,
            "keys": [this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]['6']]
        },
        extra_extensions: [
            {
                "name": `${keyChoice} Lydian Scale`,
                "keys": [this.keyDict[keyChoice]['1'], this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]['3'], this.keyDict[keyChoice]['b5'], this.keyDict[keyChoice]['5'], this.keyDict[keyChoice]['6'], this.keyDict[keyChoice]['7']]
            },
            {
                "name": `Relative Minor Scale`,
                "keys": [this.keyDict[keyChoice]['6'], this.keyDict[keyChoice]['7'], this.keyDict[keyChoice]['1'], this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]['3'], this.keyDict[keyChoice]['4'], this.keyDict[keyChoice]['5']]
            },
           {
                "name": `#11`,
                "keys": [this.keyDict[keyChoice]["b5"]]
            }
        ],
        notes_to_avoid: {
            "name": `b3, 4, b7`,
            "keys": [this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["b7"]]
      }
    }
   }

  minorChord(keyChoice: string) {
    console.log(keyChoice + ' Minor Chord Data Returned')
    return {
        name: `${keyChoice}min7`,
        chordScale: `${keyChoice} (Dorian) Minor Scale`,
        scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
        scaleFile: `./assets/mp3s/${keyChoice} Minor scale.mp3`,
        chord_guide_tone: {
            "name": `${keyChoice} Minor Chord/Guide Tones (1, b3, 5, b7)`,
            "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["b7"]]
        },
        extensions: {
            "name": "9, 11, 13",
            "keys": [this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]['6']]
        },
        extra_extensions: [
            {
            "name": `Relative Major Scale`,
            "keys": [this.keyDict[keyChoice]['b3'], this.keyDict[keyChoice]['4'], this.keyDict[keyChoice]['5'], this.keyDict[keyChoice]['b6'], this.keyDict[keyChoice]['b7'], this.keyDict[keyChoice]['1'], this.keyDict[keyChoice]['2']]
          }
        ],
        notes_to_avoid: {
            "name": "3",
            "keys": [this.keyDict[keyChoice]["3"]]
        }
    }
  }

  domChord(keyChoice: string) {
    console.log(keyChoice + ' Dominant Chord Data Returned')
    return {
        name: `${keyChoice}7`,
        chordScale: `${keyChoice} Mixolydian Scale`,
        scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
        scaleFile: `./assets/mp3s/${keyChoice} Mixolydian scale.mp3`,
        chord_guide_tone: {
            "name": `${keyChoice} Dominant Chord/Guide Tones (1, 3, 5, b7)`,
            "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["b7"]]
        },
        extensions: {
            "name": `9, 13`,
            "keys": [this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]['6']]
        },
        extra_extensions: [
            {
                "name": `${keyChoice} Lydian Dominant Scale`,
                "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]]
            },
            {
                "name": `${keyChoice} Half-Whole Diminished Scale`,
                "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]]
            },
            {
                "name": `b9, #9, 11, #11, #5/b13`,
                "keys": [this.keyDict[keyChoice]["b2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["b6"]]
            }
        ],
        notes_to_avoid: {
            "name": `7`,
            "keys": [this.keyDict[keyChoice]["7"]]
        }
    }
  }

  halfDimChord(keyChoice: string) {
    console.log(keyChoice + ' Half-Diminished Chord Data Returned')
    return {
        name: `${keyChoice}min7b5`,
        chordScale: `${keyChoice} Half-Whole Dinimished Scale`,
        scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
        scaleFile: `./assets/mp3s/${keyChoice} Half-Diminished scale.mp3`,
        chord_guide_tone: {
            "name": `${keyChoice} Diminished Chord/Guide Tones (1, b3, b5, b7)`,
            "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["b7"]]
        },
        extensions: null,
        extra_extensions: null,
        notes_to_avoid: {
            "name": `3, 7`,
            "keys": [this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["7"]]
        }
    }
  }

  fullDimChord(keyChoice: string) {
    console.log(keyChoice + ' Fully-Diminished Chord Data Returned')
    return {
        name: `${keyChoice}dim7`,
        chordScale: `${keyChoice} Whole-Half Dinimished Scale`,
        scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["b6"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["7"]],
        scaleFile: `./assets/mp3s/${keyChoice} Fully-Diminished scale.mp3`,
        chord_guide_tone: {
            "name": `${keyChoice} Diminished Chord/Guide Tones (1, b3, b5, bb7)`,
            "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["6"]]
        },
        extensions: null,
        extra_extensions: null,
        notes_to_avoid: {
            "name": `3, b7`,
            "keys": [this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["b7"]]
        }
    }
  }

}
