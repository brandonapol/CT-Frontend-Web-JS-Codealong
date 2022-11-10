// Declarations for our song values
let song;
let playSong;

// Spotify client creds
const clientId ="61ce4ba87c0c4becb24499efbbd03ddb";
const clientSecret = "ac9f72fb7bce4df084b88f6b6b06d549";

const _getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token
}

// Function to get song info when the image is clicked
/**
* @param img_index
* @param item_index
*
*/
async function clickedEvent(img_index, item_index) {
    // get track name
    let track = document.getElementsByTagName('img')[img_index].attributes[1].value;

    // get token
    let token = await _getToken();

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['Authorization', `Bearer ${token}`]
    ]);

    let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response);
    let song = response.tracks.items[item_index].preview_url

    // check if song is playing and stop it
    if (playSong) {
        stopSnippet();
    }
    songSnippet(song)
}

 /**
  * @param id
  * @param event
  * 
  * id = image if for gallery image
  * event = Mouse event given by the action from our user
  * 
  * Function produces songs from the clickedEvent based 
  * on index of image.
  */

 function getSong(id, event) {
    switch(id){
        case 'fig1': { // me
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'fig2': { // mountain breeewwwwwwwwwwwwws
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'fig3': { // petey
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'fig4': { // novo amor
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig5': { // chicago sufjan
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig6': { // head hunters
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
    }
 }

/**
 * @param url
 * 
 * url = Song Preview_url
 * 
 * Function will return an audio clip given by the preview url
 */

function songSnippet(url){
playSong = new Audio(url);
return playSong.play()
}

/**
* NO PARAMS
* 
* Function returns event to stop song snippet
*/

function stopSnippet(){
    return playSong.pause();
}