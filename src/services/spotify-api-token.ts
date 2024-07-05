import dotenv from 'dotenv';
dotenv.config();

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const TOKEN_URL = "https://accounts.spotify.com/api/token"

export const getTokenSpotifyAPI = async () =>{

    //URLSearchParams automatically encodes the parameters in the correct format.
    if (!CLIENT_ID || !CLIENT_SECRET) {
        throw new Error('Missing CLIENT_ID or CLIENT_SECRET')
    }

    const body = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
    })

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    
    const response = await fetch(TOKEN_URL, {
        method: 'POST',
        headers: headers,
        body: body,
    })

    const data = await response.json()

    if (!response.ok) {
        console.log('Failed to get token', data)
        throw new Error('Failed to get token')
    }

    return data.access_token
}