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

    // MongoConnect();

    //   function MongoConnect() {
    //       const { MongoClient } = require('mongodb');
    //       const uri = "mongodb+srv://admin:cpOLSOd6dOnhA1tS@capstonecluster.sgbgy.mongodb.net/ChordScale?retryWrites=true&w=majority";
    //       const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    //       client.connect(err => {
    //           const collection = client.db("ChordScale").collection("keyDict");
    //           // perform actions on the collection object
    //           client.close();
    //       });
    //   }
  }

  majorChord(keyChoice: string) {
    console.log(keyChoice + ' Major Chord Data Returned')
    return {
        name: `${keyChoice} maj7`,
        chordScale: `${keyChoice} Major Scale`,
        scale: [this.keyDict[keyChoice]['1'], this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]['3'], this.keyDict[keyChoice]['4'], this.keyDict[keyChoice]['5'], this.keyDict[keyChoice]['6'], this.keyDict[keyChoice]['7']],
        scaleFile: `./assets/mp3s/${keyChoice} Major scale.mp3`,
        chordFile: `.assets/mp3s/${keyChoice} Major chord.mp3`,
        chord_guide_tone: {
            "name": `${keyChoice} Major Chord Tones`,
            "keys": [this.keyDict[keyChoice]['1'], this.keyDict[keyChoice]['3'], this.keyDict[keyChoice]['5'], this.keyDict[keyChoice]['7']],
            "path": `./assets/mp3s/${keyChoice} Major chord tones.mp3`
        },
        extensions: [
            {
                "name": `9`,
                "key": this.keyDict[keyChoice]['2'],
                "path": `./assets/mp3s/${keyChoice} 9.mp3`
            },
            {
                "name": `13`,
                "key": this.keyDict[keyChoice]['6'],
                "path": `./assets/mp3s/${keyChoice} 13.mp3`

            },
            {
                "name": `#11`,
                "keys": [this.keyDict[keyChoice]["b5"]],
                "path": `./assets/mp3s/${keyChoice} Sharp_11.mp3`
            }
        ],
        extra_extensions: {
                "name": `${keyChoice} Lydian Scale`,
                "keys": [this.keyDict[keyChoice]['1'], this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]['3'], this.keyDict[keyChoice]['b5'], this.keyDict[keyChoice]['5'], this.keyDict[keyChoice]['6'], this.keyDict[keyChoice]['7']],
                "path": `./assets/mp3s/${keyChoice} Lydian scale.mp3`
        },
        notes_to_avoid: [
            {
                "name": `b3`,
                "key": this.keyDict[keyChoice]["b3"],
                "path": `./assets/mp3s/${keyChoice} b3.mp3`
            },
            {
                "name": `4`,
                "key": this.keyDict[keyChoice]["4"],
                "path": `./assets/mp3s/${keyChoice} 4.mp3`
            },
            {
                "name": `b7`,
                "key": this.keyDict[keyChoice]["b7"],
                "path": `./assets/mp3s/${keyChoice} b7.mp3`
            }
        ]
    }
   }

  minorChord(keyChoice: string) {
    console.log(keyChoice + ' Minor Chord Data Returned')
    return {
        name: `${keyChoice} min7`,
        chordScale: `${keyChoice} (Dorian) Minor Scale`,
        scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
        scaleFile: `./assets/mp3s/${keyChoice} Minor scale.mp3`,
        chordFile: `.assets/mp3s/${keyChoice} Minor chord.mp3`,
        chord_guide_tone: {
            "name": `${keyChoice} Minor Chord Tones`,
            "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["b7"]],
            "path": `./assets/mp3s/${keyChoice} Minor chord tones.mp3`
        },
        extensions: {
            "name": "9, 11, 13",
            "keys": [this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]['6']]
        },
        extra_extensions: {
            // Relative Lydian Scale, based on the flat 3rd of the Minor Scale
            "name": this.majorChord(this.keyDict[keyChoice]['b3']).extra_extensions[0].name,
            "keys": this.majorChord(this.keyDict[keyChoice]['b3']).extra_extensions[0].keys,
            "path": this.majorChord(this.keyDict[keyChoice]['b3']).extra_extensions[0].path
        },
        notes_to_avoid: {
            "name": `3, 7`,
            "keys": [this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["7"]]
        }
    }
  }

  domChord(keyChoice: string) {
    console.log(keyChoice + ' Dominant Chord Data Returned')
    return {
        name: `${keyChoice} 7`,
        chordScale: `${keyChoice} Mixolydian Scale`,
        scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
        scaleFile: `./assets/mp3s/${keyChoice} Mixolydian scale.mp3`,
        chordFile: `.assets/mp3s/${keyChoice} Dominant chord.mp3`,
        chord_guide_tone: {
            "name": `${keyChoice} 7 Chord Tones`,
            "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["b7"]]
        },
        extensions: [
            {
                "name": `9, 13`,
                "keys": [this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]['6']]
            },
            {
                "name": `b9, #9, 11, #11, #5/b13`,
                "keys": [this.keyDict[keyChoice]["b2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["b6"]]
            }
        ],
        extra_extensions: [
            {
                "name": `${keyChoice} Half-Whole Dinimished Scale`,
                "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
                "path": `./assets/mp3s/${keyChoice} Half-Diminished scale.mp3`
            },
            {
                "name": `${keyChoice} Lydian Dominant Scale`,
                "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]]
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
        name: `${keyChoice} min7b5`,
        chordScale: `${keyChoice} Half-Whole Dimimished Scale`,
        scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
        scaleFile: `./assets/mp3s/${keyChoice} Half-Diminished scale.mp3`,
        chordFile: `.assets/mp3s/${keyChoice} Half-Diminished chord.mp3`,
        chord_guide_tone: {
            "name": `${keyChoice} Diminished Chord Tones`,
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
        name: `${keyChoice} dim7`,
        chordScale: `${keyChoice} Whole-Half Dimimished Scale`,
        scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["b6"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["7"]],
        scaleFile: `./assets/mp3s/${keyChoice} Fully-Diminished scale.mp3`,
        chord_guide_tone: {
            "name": `${keyChoice} Diminished Chord Tones`,
            "keys": [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["6"]]
        },
        extensions: null,
        extra_extensions: {
            // Fully Diminished chords are entirely even in that the intervals between chord tones are exactly the same
            // and can be looped forever...
            // DO NOT USE RECURSIVE METHOD CALL HERE
            "name": this.keyDict[keyChoice]["b3"] + ` Whole-Half Diminished Scale`,
            "keys": [this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["b6"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["7"], this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"]],
            "path": `./assets/mp3s/` + this.keyDict[keyChoice]["b3"] + ` Fully-Diminished scale.mp3`
        },
        notes_to_avoid: {
            "name": `3, b7`,
            "keys": [this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["b7"]]
        }
    }
  }

}
