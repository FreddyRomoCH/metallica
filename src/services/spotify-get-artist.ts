import { getTokenSpotifyAPI } from "./spotify-api-token.ts"
export const ARTIST_LINK = "2ye2Wgw4gimLv2eAKyk1NB";

type Artist = {
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

type ArtistResponse = {
    data: Artist;
    statusCode: number;
}

export const getArtist = async (): Promise<ArtistResponse | undefined> => {
    // We wait for the Token to resolve before we can use it.
    const accessToken = await getTokenSpotifyAPI()

    if (!accessToken) {
        return { data: {message: "Artist not found"} as Artist, statusCode: 404 }
    }

    const url = `https://api.spotify.com/v1/artists/${ARTIST_LINK}`
    const headers = {
        'Authorization': `Bearer ${accessToken}`
    }

    try {
        const response = await fetch(url, { headers: headers })
        const statusCode = response.status

        if (!response.ok) {
            return { data: {message: "Artist not found"} as Artist, statusCode }
        }else{
            const data = await response.json()
            return { data, statusCode }
        }

    } catch (error) {
        return { data: {message: "Internal Server Error"} as Artist, statusCode: 500 }
    }
};
