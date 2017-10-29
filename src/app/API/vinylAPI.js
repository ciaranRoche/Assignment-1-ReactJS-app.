import _ from 'lodash';

class VinylAPI{
  constructor(){
    this.vinyl = [
      {
        'id': 0,
        'artist': 'Sleep',
        'album': 'Holy Mountain',
        'image': 'https://s3-eu-west-1.amazonaws.com/piedpipervinyl/sleep.jpg',
        'genre': 'Doom',
        'year': 1992,
        'notes' : 'Sleeps Holy Mountain is the second studio album by the American band Sleep.It was released in November 1992 in Europe, and March 1993 in the USA through Earache Records.',
        'likes': 50,
        'reviews':[{
          'user': 1,
          'review': 'Love this album',
          'likes': 2
        },{
          'user': 2,
          'review': 'My Favorite Album',
          'likes': 5
        }
      ]
      },{
        'id': 1,
        'artist': 'Black Sabbath',
        'album': 'Master of Reality',
        'image': 'https://s3-eu-west-1.amazonaws.com/piedpipervinyl/masterofreality.jpg',
        'genre': 'Rock',
        'year': 1971,
        'notes' : 'Catalog entry #3, released on July 21, 1971. Master of Reality reached #8 on the U.S. album chart, immediately going gold. It was Black Sabbaths 1st album to debut in the Top 10. Also their first album to feature the heavier new sound created by dropping the tuning three semi-tones below the standard E, thus creating the premise for what would become known as the stoner rock sound.',
        'likes': 43,
        'reviews':{
          'user': 1,
          'review': 'Love this album',
          'likes': 2
        }
      },{
        'id': 2,
        'artist': 'Metallica',
        'album': 'Ride The Lightning',
        'image': 'https://s3-eu-west-1.amazonaws.com/piedpipervinyl/ridethelightning.jpg',
        'genre': 'Trash Metal',
        'year': 1984,
        'notes' : 'Ride the Lightning is the second studio album by American heavy metal band Metallica, released on July 27, 1984, by the independent record label Megaforce Records',
        'likes': 16,
        'reviews':{
          'user': 1,
          'review': 'Love this album',
          'likes': 2
        }
      },{
        'id': 3,
        'artist': 'Uncle Acid and The Deadbeats',
        'album': 'The Night Creeper',
        'image': 'https://s3-eu-west-1.amazonaws.com/piedpipervinyl/nightcreeper.jpg',
        'genre': 'Doom',
        'year': 2015,
        'notes' : 'The Night Creeper is the fourth studio album by English band Uncle Acid & the Deadbeats. The album released on 4 September 2015.',
        'likes': 50,
        'reviews':{
          'user': 1,
          'review': 'Love this album',
          'likes': 2
        }
      },{
        'id': 4,
        'artist': 'Uncle Acid and The Deadbeats',
        'album': 'Vol 1',
        'image': 'https://s3-eu-west-1.amazonaws.com/piedpipervinyl/vol1.jpg',
        'genre': 'Doom',
        'year': 2010,
        'notes' : 'First released on Friday February 13th, (40 years to the day after Black Sabbath’s debut LP), “Vol 1” was the first efforts of unknown songwriter, Kevin Starrs. Pressed in small numbers for a non existing fan base, the album took several months to shift all 30 CD-R copies and provided a small platform to fund its follow up, “Blood Lust” (2011).',
        'likes': 50,
        'reviews':{
          'user': 1,
          'review': 'Love this album',
          'likes': 2
        }
      },{
        'id': 5,
        'artist': 'Queens of the Stone Age',
        'album': 'Villians',
        'image': 'https://s3-eu-west-1.amazonaws.com/piedpipervinyl/villians.jpg',
        'genre': 'Rock',
        'year': 2017,
        'notes' : 'Villains is the seventh studio album by American rock band Queens of the Stone Age, released on August 25, 2017 through Matador.',
        'likes': 50,
        'reviews':{
          'user': 1,
          'review': 'Love this album',
          'likes': 2
        }
      },
    ]
  }

  getAll() {
    var promise = new Promise ((resolve, reject) => {
      setTimeout(() => resolve(this.vinyl), 1000)
    });
    return promise;
  }

  getAlbum(key){
    let result = null;
    let index = _.findIndex(this.vinyl, function(vinyl){
      return vinyl.id == key;
    });
    if (index !== -1){
      result = this.vinyl[index];
    }
    return result;
  }
}

export default (new VinylAPI());