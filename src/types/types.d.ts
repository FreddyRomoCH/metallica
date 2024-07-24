export interface Setlist {
    id: string;
    venue: {
        name: string;
        city: {
            name: string;
        };
    };
    sets: {
        set: {
            song: {
            name: string;
            }[];
        }[];
    };
    name: string;
    eventDate: string;
  }

export interface SetlistResponse {
    setlist: Setlist[];
}

export interface FetchError {
    error: string;
    message: string;
}

export type FetchResult = Setlist[] | FetchError[];

//BAND MEMBERS
export interface BandMembers {
    id: number;
    name: string;
    role: string;
    born: string;
    bio: string;
    picture: string;
}

//GET ARTIST
export type Artist = {
  id: string;
  name: string;
  genres: string[];
  popularity: number;
  followers: {
      total: number;
  };
  images: {
      height: number;
      url: string;
      width: number;
  }[];
  message?: string;
}

export type ArtistResponse = {
  data: Artist;
  statusCode: number;
}

//SPOTIFY TRACKS TYPES
type ImageObject = {
    url: string;
    height: number;
    width: number;
}

export type TrackObject = {
    tracks: {
        name: string;
        album: {
            name: string;
            images: ImageObject[];
        };
        uri: string;
        popularity: number;
    }[];
    message?: string;
}

export type TrackResponse = {
    data: TrackObject;
    statusCode: number;
}

//LAST FM TOP SONGS TYPES

export type FMTopSongs = {
    toptracks: {
        track: {
            name: string;
            playcount: number;
            listeners: number;
            mbid: string;
            url: string;
            streamable: {
                fulltrack: string;
            };
            artist: {
                name: string;
                mbid: string;
                url: string;
            };
            image: {
                '#text': string;
                size: string;
            }[];
            albumImage?: string;
        }[]
    };
    message?: string;
}

export type FMTrackInfo = {
    track: {
        album: {
            image: {
                '#text': string;
                size: string;
            }[]
        }
    };

}

export type FMTopSongsResponse = {
    data: FMTopSongs;
    statusCode: number;
}