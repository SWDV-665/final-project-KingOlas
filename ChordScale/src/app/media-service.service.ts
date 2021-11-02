import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Howl } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  constructor(private media:Media) {
    console.log('Media Service Running')

    // MongoConnect();

    //   function MongoConnect() {
    //       const { MongoClient } = require('mongodb');
    //       const uri = "mongodb+srv://admin:cpOLSOd6dOnhA1tS@capstonecluster.sgbgy.mongodb.net/ChordScale?retryWrites=true&w=majority";
    //       const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    //       client.connect(err => {
    //           const collection = client.db("ChordScale").collection("mp3s");
    //           // perform actions on the collection object
    //           client.close();
    //       });
    //   }

    // const { MongoClient } = require('mongodb');
    // const uri = "mongodb+srv://admin:cpOLSOd6dOnhA1tS@capstonecluster.sgbgy.mongodb.net/ChordScale.mp3s?retryWrites=true&w=majority";
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // client.connect(err => {
    //   const collection = client.db("test").collection("devices");
    //   // perform actions on the collection object
    //   client.close();
    // });

  }
   
  keyChoice: string
  chordType: string
  location: string

  file: MediaObject
  player: Howl

  playTrack(keyChoice: string, chordType: string, location: string) {
    console.log('Getting Chord Audio: ' + keyChoice + ' ' + chordType)
    this.player = new Howl ({
      src: [location]
    })
    this.player.play()
  }

  stopTrack() {
    console.log('Stopping Chord Audio')
    this.player.stop()
  }

}
