import dotenv from 'dotenv';
dotenv.config();

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const TOKEN_URL = "https://accounts.spotify.com/api/token"

export const getTokenSpotifyAPI = async (): Promise<string> =>{

    //URLSearchParams automatically encodes the parameters in the correct format.
    if (!CLIENT_ID || !CLIENT_SECRET) {
        console.log('Missing CLIENT_ID or CLIENT_SECRET')
        return ""
    }

    try{
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
            return ""
        }
    
        return data.access_token

    } catch (error) {
        if (error instanceof SyntaxError) {
            return ""
        }

        return ""
    }

    
}