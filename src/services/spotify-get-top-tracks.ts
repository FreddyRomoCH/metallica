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
    }[];
    message?: string;
}

type TrackResponse = {
    data: TrackObject;
    statusCode: number;
}

export const getTopTracks = async (): Promise<TrackResponse | undefined> => {
    const accesToken = await getTokenSpotifyAPI();
    if (!accesToken) {
        return { data: {message: "Artist not found"} as TrackObject, statusCode: 404 } 
    }

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
            return { data: {message: "Artist not found"} as TrackObject, statusCode: response.status }
        }

        const data = await response.json()
        return {data, statusCode: response.status}
    }catch(error){
        return { data: {message: "Internal Server Error"} as TrackObject, statusCode: 500 }
    }
}