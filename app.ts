import * as fs                          from "fs";
import * as storage                     from "./tools/storage";
import * as TS                          from "./types/types";
import { Quran, Page, asma }                  from "../db/Q/Quran";

// .. ====================================================================

// .. ====================================================================

// .. major init function
( async function self_ignite () {

    // let path = "../db/Q/Quran.ts";
    // let quran = JSON.parse( fs.readFileSync( path, 'utf8' ) );
    // let newFormat = [];
    // for( let x of Quran ) {
    //     if ( x.ayah === 1 ) newFormat.push( [] );
    //     newFormat[ x.sura -1 ][ x.ayah -1 ] = x.simple;
    // }
    // let ex = [];
    // for ( let x of newFormat ) ex.push( x.join(",") );
    let starts = [];
    for ( let x of asma ) starts.push( x[2] );

    let book = [];
    for ( let x of Quran ) book.push( [x.sura,x.ayah, x.simple, x.sajdeh ] );
    // let tmp = "";
    // let i = 0;
    // for ( let ii in Page ) {
    //     i = Number(ii);
    //     tmp = "";
    //     if ( i >= Page.length ) break;

    //     for( let j = Page[i]; j<Page[i+1]; j++ ) {
    //         if ( starts.includes(j) && j>0 && j!==1235 ) tmp += Quran[0].simple + "," + Quran[j].simple + ",";
    //         else if ( j===1235 ) tmp += " ------- " + "," + Quran[j].simple + ",";
    //         else tmp += Quran[j].simple + ",";
    //     }

    //     book[i] = tmp;
 
    // }
    // book.pop();
    storage.saveData( book, "tmp/db/", "Quran" );

} )();

// .. ====================================================================
