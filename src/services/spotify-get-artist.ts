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
    }[]
}

export const getArtist = async (): Promise<Artist | undefined> => {
    // We wait for the Token to resolve before we can use it.
    const accessToken = await getTokenSpotifyAPI()

    const url = `https://api.spotify.com/v1/artists/${ARTIST_LINK}`
    const headers = {
        'Authorization': `Bearer ${accessToken}`
    }

    try {
        const response = await fetch(url, { headers: headers })
        if (!response.ok) {
            throw new Error('Failed to get artist')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Error:', error)
    }
};
