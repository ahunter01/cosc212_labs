var ClassicCinemaIDB = (function () {
    'use strict';
    
    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.");
        retrun;
    }
    var pub = {};
    var db;
    const dbName = "ClassicCinema";
    const movieDate = [
        {
            title: "Gone With the Wind (1939)",
            director: ["Victor Fleming", "George Cukor", "Sam Wood"],
            starring: ["Clark Gable", "Vivien Leigh", "Leslie Howard", "Olivia de Havilland", "Hattie McDaniel"],
            comments: "An epic historical romance and winner of 8 Academy Awards (from 13 nominations).",
            price: 13.99
        },
        {
            title: "The Jazz Singer (1927)",
            director: ["Alan Crosland"],
            starring: ["Al Jolson", "May McAvoy", "Warner Oland", "Cantor Rosenblatt"],
            comments: "The first feature length 'talkie, The Jazz Singer is a piece of cinematic history",
            price: 13.99
        },
        {
            title: "Metropolis (1927)",
            director: ["Fritz Lang"],
            starring: ["Alfred Abel", "Brigitte Helm", "Gustav Frohlich", "Rudolf Klein-Rogge"],
            comments: "A lovingly restored version of Fritz Lang's dystopian masterpiece, one of the great achievements of the silent era",
            price: 19.99
        }
    ];
    var request = indexedDB.open(dbName, 1);    
    request.onerror = function (event) { 
        alert("Opening db error " + request.error);
    };
    request.onsuccess = function (event) { 
        alert("Database successfully created.")
    }
    request.onupgradeneeded = function (event) { 
        db = event.target.result;
    var movieObjectStore = db.createObjectStore("movies", {keyPath: "title"});
        console.log("adding movie data");
        var customerObjectStoreTransaction = db.transaction("movies", "readwrite").objectStore("movies");
        movieData.forEach(function (m) { 
            customerObjectStoreTransaction.add(m); 
            movieData.forEach(function (m) {
                customerObjectStoreTransaction.add(m);
            });
        }); 
    };
    return pub;
}());