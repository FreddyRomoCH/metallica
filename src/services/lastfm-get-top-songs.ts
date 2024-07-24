import { type FMTopSongs, type FMTrackInfo, type FMTopSongsResponse} from '../types/types.d'

const ARTIST = 'metallica';
const API_KEY = process.env.LASTFM_API_KEY;

export const lastFMGetTopSongs = async (): Promise<FMTopSongsResponse> => {
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${ARTIST}&api_key=${API_KEY}&limit=10&format=json`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            return { data: {message: "Artist not found"} as FMTopSongs, statusCode: response.status };
        }

        const data: FMTopSongs = await response.json();

            for (const song of data.toptracks.track) {
                if (song.mbid) {
                    const albumImageURL = `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${API_KEY}&artist=${ARTIST}&mbid=${song.mbid}&format=json`;
                    try {
                        const albumResponse = await fetch(albumImageURL);
                        if (albumResponse.ok) {
                            const albumData: FMTrackInfo = await albumResponse.json();
                            song.albumImage = albumData.track.album.image[2]["#text"];
                        }
                    } catch (error) {
                    }
                }
            }

            return { data, statusCode: response.status };

    } catch (error) {
        return { data: {message: "Internal Server Error"} as FMTopSongs, statusCode: 500 };
    }
}