import React, { Fragment, useState } from "react"

export default function TrackInfo(){
    
    const [likedTracks, setLikedTracks] = useState([])

    const favourite = (trackName) => {
        // Check if the selected track has already been liked - returning true of false
        if(!likedTracks.includes(trackName)){

            // Appends the new track to a shallow copy of the initial array 
            // ! Update the state with a new array that contains the liked track
            setLikedTracks([...likedTracks, trackName])

        }
    }
    
    return(
        // Top 5 Songs
        <div class="comp1">
            <h1>Top 5 Viewed Tracks</h1>
            <table>
                <tr>
                    <th>Track Name</th>
                    <th>YouTube Views</th>
                    <th>Favourite</th>
                </tr>
                <tr>
                    <td>Loyal</td>
                    <td>1,304,303,521</td>
                    <td><button onClick={() => favourite("Loyal")}>Like</button></td>
                </tr>
                <tr>
                    <td>International Love</td>
                    <td>904,438,947</td>
                    <td><button onClick={() => favourite("Internation Love")}>Like</button></td>
                </tr>
                <tr>
                    <td>Post To Be</td>
                    <td>862,010,724</td>
                    <td><button onClick={() => favourite("Post To Be")}>Like</button></td>
                </tr>
                <tr>
                    <td>Freaky Friday</td>
                    <td>741,538,428</td>
                    <td><button onClick={() => favourite("Freaky Friday")}>Like</button></td>
                </tr>
                <tr>
                    <td>Algo Me Gusta De Ti</td>
                    <td>729,536,539</td>
                    <td><button onClick={() => favourite("Algo Me Gusta De Ti")}>Like</button></td>
                </tr>
            </table>
    
            <br /><h2 class="favourites">Your Favourites: </h2>
            <ul>
                {likedTracks.map((track, index) => (
                    <li key={index}>{track}
                    </li>
                ))}
            </ul>
        </div>
    )
}