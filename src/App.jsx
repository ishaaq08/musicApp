import React, { useState } from "react"
import ArtistInfo from "./Component1"
import TrackInfo from "./Component2"
import "./App.css"

export default function App(){
    return (
        <>
        {/* Name, Music Type and Intro Paragraph */}
        <header>Music Player</header>
        <ArtistInfo />
        <TrackInfo />
        </>
    )
}