// Arrow functions scope

// Symbol is undefined inside the anonymous function
/*function StockQuoteGenerator(symbol) {
    this.symbol = symbol;
    console.log(this.symbol);

    setInterval(function () {
        console.log('The price of ' + this.symbol + ' is ' + Math.random());
    }, 1000);
}*/

// cloning context on another variable
/*function StockQuoteGenerator(symbol) {
    const that = this;
    this.symbol = symbol;
    console.log(this.symbol);

    setInterval(function () {
        console.log('The price of ' + that.symbol + ' is ' + Math.random());
    }, 1000);
}*/

// using arrow functions
/*function StockQuoteGenerator(symbol) {
    this.symbol = symbol;
    console.log(this.symbol);

    setInterval(() => {
        console.log('The price of ' + this.symbol + ' is ' + Math.random());
    }, 1000);
}

const stockQuoteGenerator = new StockQuoteGenerator('IBM');*/

function printSong() {
    console.log('Oops - The Global Object');
}

const jukebox = {
    songs: [{
            title: 'Wanna Be Startin Somethin',
            artist: 'Michael Jackson'
        },
        {
            title: 'Superstar',
            artist: 'Madonna'
        }
    ],
    printSong: function (song) {
        console.log(`${song.title} - ${song.artist}`);
    },
    printSongs: function () {
        this.songs.forEach(song => this.printSong(song));
    }
    /*,
        printSongs: function () {
            this.songs.forEach(function (song) {
                this.printSong(song);
            }.bind(this));
        }*/
}

jukebox.printSongs();