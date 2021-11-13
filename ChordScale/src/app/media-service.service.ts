import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Howl, Howler } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class MediaServiceService {

  constructor(private media:Media) {
    console.log('Media Service Running')

    Howler.volume(0.45);

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

  //file: MediaObject
  player: Howl

  getTrack(keyChoice: string, chordType: string, location: string) {
    console.log(`Getting Chord Audio: ${keyChoice} ${chordType}`)
    this.player = new Howl ({
      src: [location]
    })
    const filename = location.split('\\').pop().split('/').pop()
    console.log(` Successfully Loaded ${filename}`)
  }

  playTrack() {
    this.player.play()
  }

  stopTrack() {
    this.player.stop()
  }

}
