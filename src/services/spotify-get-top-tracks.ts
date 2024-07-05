import {getTokenSpotifyAPI} from "./spotify-api-token.ts"
import {ARTIST_LINK} from "./spotify-get-artist.ts"

type ImageObject = {
    url: string;
    height: number;
    width: number;
}

type TrackObject = {
    tracks: {
        name: string;
        album: {
            name: string;
            images: ImageObject[];
        };
        uri: string;
        popularity: number;
    }[]
}

export const getTopTracks = async (): Promise<TrackObject | undefined> => {
    const accesToken = await getTokenSpotifyAPI();
    const url = `https://api.spotify.com/v1/artists/${ARTIST_LINK}/top-tracks`;

    const headers = {
        'Authorization': `Bearer ${accesToken}`
    }

    try {
        const response = await fetch(
            url,
            {
                headers: headers
            }
        )
        if (!response.ok) {
            throw new Error('Failed to get top tracks')
        }

        const data = await response.json()
        return data
    }catch(error){
        console.log('Error:', error)
    }
}