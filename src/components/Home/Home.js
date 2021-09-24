import React from 'react'
import Banner from '../Banner'
import './Home.css'
import homeBanner from '../images/AltNewCodeSnippet.jpg'


export default function Home() {
    return (
        <section className='home'>
            <Banner
                image={homeBanner}
                description="A random snippet of code." />

            
        </section>
    )
}
