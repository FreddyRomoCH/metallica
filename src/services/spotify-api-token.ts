const CLIENT_ID = "72aa3dc7b8c44bc7a6ab74e36d80dc01"

const TOKEN_URL = "https://accounts.spotify.com/api/token"

export const getTokenSpotifyAPI = async () =>{

    //URLSearchParams automatically encodes the parameters in the correct format.
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