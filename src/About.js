import React from 'react'
import Skills from './Skills'

export default function About({ aboutRef, darken }) {

    return(

        <div
        ref = {aboutRef}
        className = {`about ${darken ? 'dark' : ''}`}
        >

            <h1 className = 'title'>ABOUT</h1>
            <div className = 'titleunderline'></div>

            <p>A mission-driven, analytical Front End developer, who believes that the best work is accomplished in a collaborative environment. Currently working at
                <span
                onClick = { () => window.open('https://log-ai.com') }
                >Log-Ai.</span>
            I am passionate about creating new technology that empowers individuals to find the resources and tools to enhance their day-to-day lives.</p>

            <Skills />

        </div>

    )
}