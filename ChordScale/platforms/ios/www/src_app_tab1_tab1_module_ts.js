(self["webpackChunkChordScale"] = self["webpackChunkChordScale"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 1282:
/*!******************************************!*\
  !*** ./src/app/chord-service.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChordServiceService": () => (/* binding */ ChordServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _keyDict_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyDict.json */ 1281);



let ChordServiceService = class ChordServiceService {
    constructor() {
        console.log('ChordService Running...');
        this.keyDict = _keyDict_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    majorChord(keyChoice) {
        console.log(keyChoice + ' Major Chord Data Returned');
        // console.log(this.keyDict)
        return {
            name: `${keyChoice}maj7`,
            chordScale: `${keyChoice} Major Scale`,
            scale: [this.keyDict[keyChoice]['1'], this.keyDict[keyChoice]['2'], this.keyDict[keyChoice]['3'], this.keyDict[keyChoice]['4'], this.keyDict[keyChoice]['5'], this.keyDict[keyChoice]['6'], this.keyDict[keyChoice]['7']],
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
        };
    }
    minorChord(keyChoice) {
        console.log(keyChoice + ' Minor Chord Data Returned');
        // console.log(this.keyDict)
        return {
            name: `${keyChoice}min7`,
            chordScale: `${keyChoice} (Dorian) Minor Scale`,
            scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
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
        };
    }
    domChord(keyChoice) {
        console.log(keyChoice + ' Dominant Chord Data Returned');
        // console.log(this.keyDict)
        return {
            name: `${keyChoice}7`,
            chordScale: `${keyChoice} Mixolydian Scale`,
            scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
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
        };
    }
    halfDimChord(keyChoice) {
        console.log(keyChoice + ' Half-Diminished Chord Data Returned');
        // console.log(this.keyDict)
        return {
            name: `${keyChoice}min7b5`,
            chordScale: `${keyChoice} Half-Whole Dinimished Scale`,
            scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["b2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["3"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["5"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["b7"]],
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
        };
    }
    fullDimChord(keyChoice) {
        console.log(keyChoice + ' Fully-Diminished Chord Data Returned');
        // console.log(this.keyDict)
        return {
            name: `${keyChoice}dim7`,
            chordScale: `${keyChoice} Whole-Half Dinimished Scale`,
            scale: [this.keyDict[keyChoice]["1"], this.keyDict[keyChoice]["2"], this.keyDict[keyChoice]["b3"], this.keyDict[keyChoice]["4"], this.keyDict[keyChoice]["b5"], this.keyDict[keyChoice]["b6"], this.keyDict[keyChoice]["6"], this.keyDict[keyChoice]["7"]],
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
        };
    }
};
ChordServiceService.ctorParameters = () => [];
ChordServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ChordServiceService);



/***/ }),

/***/ 364:
/*!******************************************!*\
  !*** ./src/app/media-service.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaServiceService": () => (/* binding */ MediaServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/media/ngx */ 3661);



let MediaServiceService = class MediaServiceService {
    constructor(media) {
        this.media = media;
        this.file = this.media.create('ChordScale/src/assets/Track 07 - SurfofDeath.m4a');
    }
    playTrack() {
        this.file.play();
    }
    pauseTrack() {
        this.file.pause();
    }
    stopTrack() {
        this.file.stop();
    }
};
MediaServiceService.ctorParameters = () => [
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_0__.Media }
];
MediaServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MediaServiceService);



/***/ }),

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2501:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 9474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _chord_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chord-service.service */ 1282);
/* harmony import */ var _media_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media-service.service */ 364);






let Tab1Page = class Tab1Page {
    constructor(chordService, mediaService) {
        this.chordService = chordService;
        this.mediaService = mediaService;
    }
    getChord(keyChoice, chordType) {
        console.log('Getting Chord Data: ' + keyChoice + ' ' + chordType);
        switch (chordType) {
            case 'maj':
                this.data = this.chordService.majorChord(keyChoice);
                console.log(this.data);
                break;
            case 'min':
                this.data = this.chordService.minorChord(keyChoice);
                console.log(this.data);
                break;
            case 'dom':
                this.data = this.chordService.domChord(keyChoice);
                console.log(this.data);
                break;
            case 'half':
                this.data = this.chordService.halfDimChord(keyChoice);
                console.log(this.data);
                break;
            case 'full':
                this.data = this.chordService.fullDimChord(keyChoice);
                console.log(this.data);
                break;
            default:
                this.data = null;
                break;
        }
        return this.data;
    }
    play() {
        this.mediaService.playTrack();
        console.log('Playing Track');
    }
    pause() {
        this.mediaService.pauseTrack();
        console.log('Track Paused');
    }
    stop() {
        this.mediaService.stopTrack();
        console.log('Track Stopped');
    }
};
Tab1Page.ctorParameters = () => [
    { type: _chord_service_service__WEBPACK_IMPORTED_MODULE_2__.ChordServiceService },
    { type: _media_service_service__WEBPACK_IMPORTED_MODULE_3__.MediaServiceService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 9474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      ChordScale Calculator\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">ChordScale Calculator</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<!-- Chord Selector -->\n  <ion-card>\n    \n    <ion-card-header>\n      <ion-card-subtitle>\n        Chord Selection\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-list>\n    \n      <ion-item>\n        <ion-label for=\"keyChoice\">Root</ion-label>\n        <ion-select [(ngModel)]=\"keyChoice\" id=\"keyChoice\" name=\"keyChoice\" placeholder=\"Select Chord Root\" okText=\"Okay\" cancelText=\"Cancel\">\n          <ion-select-option name=\"c\" value=\"C\">C</ion-select-option>\n          <ion-select-option name=\"cSharp\" value=\"C#\">C#</ion-select-option>\n          <ion-select-option name=\"dFlat\" value=\"Db\">Db</ion-select-option>\n          <ion-select-option name=\"d\" value=\"D\">D</ion-select-option>\n          <ion-select-option name=\"eFlat\" value=\"Eb\">Eb</ion-select-option>\n          <ion-select-option name=\"e\" value=\"E\">E</ion-select-option>\n          <ion-select-option name=\"f\" value=\"F\">F</ion-select-option>\n          <ion-select-option name=\"fSharp\" value=\"F#\">F#</ion-select-option>\n          <ion-select-option name=\"gFlat\" value=\"Gb\">Gb</ion-select-option>\n          <ion-select-option name=\"g\" value=\"G\">G</ion-select-option>\n          <ion-select-option name=\"aFlat\" value=\"Ab\">Ab</ion-select-option>\n          <ion-select-option name=\"a\" value=\"A\">A</ion-select-option>\n          <ion-select-option name=\"bFlat\" value=\"Bb\">Bb</ion-select-option>\n          <ion-select-option name=\"b\" value=\"B\">B</ion-select-option>\n        </ion-select>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label for=\"chordType\">Type</ion-label>\n        <ion-select [(ngModel)]=\"chordType\" id=\"chordType\" name=\"chordType\" placeholder=\"Select Chord Type\" okText=\"Okay\" cancelText=\"Cancel\">\n          <ion-select-option name=\"major\" value=\"maj\">Major</ion-select-option>\n          <ion-select-option name=\"minor\" value=\"min\">Minor</ion-select-option>\n          <ion-select-option name=\"dominant\" value=\"dom\">Dominant</ion-select-option>\n          <ion-select-option name=\"halfDiminished\" value=\"half\">Half Diminished</ion-select-option>\n          <ion-select-option name=\"fullyDiminished\" value=\"full\">Fully Diminished</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-button (click)=\"getChord(keyChoice, chordType)\" expand=\"block\">Calculate!</ion-button>\n    </ion-list>\n  </ion-card>\n\n<!-- No Data Display -->\n  <ion-card *ngIf=\"data == null\">\n    <h3 class=\"ion-text-center\">\n      <em>No Chord Selected</em>\n    </h3>\n  </ion-card>\n\n<!-- Chord Data Display  -->\n  <ion-card *ngIf=\"data != null\">\n    <ion-card-title>Here are the notes that work best for playing over {{data.name}}:</ion-card-title>\n        \n  <!-- Standard Scales & Notes: All Types -->\n    <ion-item>Standard Scales & Notes</ion-item>\n\n    <ion-grid>\n      <ion-row>{{data.chordScale}}:</ion-row>\n\n      <ion-row>\n        <ion-col *ngFor=\"let degree of data.scale\">{{degree}}</ion-col>\n      </ion-row>\n\n      <ion-row>{{data.chord_guide_tone.name}}:</ion-row>\n      \n      <ion-row>\n        <ion-col *ngFor=\"let degree of data.chord_guide_tone.keys\">{{degree}}</ion-col>\n      </ion-row>\n    </ion-grid>\n\n  <!-- Extra Scales & Notes: Maj, Min, Dom -->\n    <ion-item *ngIf=\"data.extensions != null\">More Interesting Scales & Notes</ion-item>\n\n    <ion-grid *ngIf=\"data.extensions != null\">\n      <ion-row>Useful Extentions ({{data.extensions.name}}):</ion-row>\n\n      <ion-row>\n        <ion-col *ngFor=\"let degree of data.extensions.keys\">{{degree}}</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"data.extra_extensions != null\">\n      <ion-row>{{data.extra_extensions[0].name}}:</ion-row>\n\n      <ion-row>\n        <ion-col *ngFor=\"let degree of data.extra_extensions[0].keys\">{{degree}}</ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"data.extra_extensions[1] != null\">{{data.extra_extensions[1].name}}:</ion-row>\n\n      <ion-row *ngIf=\"data.extra_extensions[1] != null\">\n        <ion-col *ngFor=\"let degree of data.extra_extensions[1].keys\">{{degree}}</ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"data.extra_extensions[2] != null\">Interesting Extention(s) ({{data.extra_extensions[2].name}}):</ion-row>\n\n      <ion-row *ngIf=\"data.extra_extensions[2] != null\">\n        <ion-col *ngFor=\"let degree of data.extra_extensions[2].keys\">{{degree}}</ion-col>\n      </ion-row>\n    </ion-grid>\n\n  <!-- Notes to AVOID: All Types -->\n    <ion-item>Notes to Avoid</ion-item>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col *ngFor=\"let degree of data.notes_to_avoid.keys\">{{degree}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-button (click)=\"play()\">\n      <ion-icon name=\"play\"></ion-icon>\n    </ion-button>\n\n    <ion-button (click)=\"pause()\">\n      <ion-icon name=\"pause\"></ion-icon>\n    </ion-button>\n\n    <ion-button (click)=\"stop()\">\n      <ion-icon name=\"square\"></ion-icon>\n    </ion-button>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ 1281:
/*!******************************!*\
  !*** ./src/app/keyDict.json ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"C":{"1":"C","2":"D","3":"E","4":"F","5":"G","6":"A","7":"B","b2":"C#/Db","b3":"Eb/D#","b5":"F#/Gb","b6":"Ab/G#","b7":"Bb"},"C#":{"1":"C#","2":"D#","3":"E#/F","4":"F#","5":"G#","6":"A#","7":"B#/C","b2":"D","b3":"E","b5":"G","b6":"A","b7":"B"},"Db":{"1":"Db","2":"Eb","3":"F","4":"Gb","5":"Ab","6":"Bb","7":"C","b2":"D","b3":"E","b5":"G","b6":"A","b7":"Cb/B"},"D":{"1":"D","2":"E","3":"F#","4":"G","5":"A","6":"B","7":"C#","b2":"Eb","b3":"F","b5":"Ab/G#","b6":"Bb","b7":"C"},"Eb":{"1":"Eb","2":"F","3":"G","4":"Ab","5":"Bb","6":"C","7":"D","b2":"E","b3":"Gb/F#","b5":"A","b6":"Cb/B","b7":"Db"},"E":{"1":"E","2":"F#","3":"G#","4":"A","5":"B","6":"C#","7":"D#","b2":"F","b3":"G","b5":"Bb","b6":"C","b7":"D"},"F":{"1":"F","2":"G","3":"A","4":"Bb","5":"C","6":"D","7":"E","b2":"Gb","b3":"Ab/G#","b5":"B","b6":"Db","b7":"Eb"},"F#":{"1":"F#","2":"G#","3":"A#","4":"B","5":"C#","6":"D#","7":"E#/F","b2":"G","b3":"A","b5":"C","b6":"D","b7":"E"},"Gb":{"1":"Gb","2":"Ab","3":"Bb","4":"Cb/B","5":"Db","6":"Eb","7":"F","b2":"G","b3":"A","b5":"C","b6":"D","b7":"E"},"G":{"1":"G","2":"A","3":"B","4":"C","5":"D","6":"E","7":"F#","b2":"Ab","b3":"Bb","b5":"C#/Db","b6":"Eb/D#","b7":"F"},"Ab":{"1":"Ab","2":"Bb","3":"C","4":"Db","5":"Eb","6":"F","7":"G","b2":"A","b3":"Cb/B","b5":"D","b6":"E","b7":"Gb"},"A":{"1":"A","2":"B","3":"C#","4":"D","5":"E","6":"F#","7":"G#","b2":"Bb","b3":"C","b5":"Eb/D#","b6":"F","b7":"G"},"Bb":{"1":"Bb","2":"C","3":"D","4":"Eb","5":"F","6":"G","7":"A","b2":"B","b3":"Db","b5":"E","b6":"Gb/F#","b7":"Ab"},"B":{"1":"B","2":"C#","3":"D#","4":"E","5":"F#","6":"G#","7":"A#","b2":"C","b3":"D","b5":"F","b6":"G","b7":"A"}}');

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map