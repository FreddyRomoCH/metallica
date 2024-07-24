import {getTokenSpotifyAPI} from "./spotify-api-token.ts"
import {ARTIST_LINK} from "./spotify-get-artist.ts"
import { type TrackObject, type TrackResponse } from "../types/types.d"

export const getTopTracks = async (): Promise<TrackResponse> => {
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