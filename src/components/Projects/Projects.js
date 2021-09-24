import React from 'react'
import Banner from '../Banner'
import ProjectsBanner from '../images/AltCode.jpg'


export default function Projects() {
    return (
        <section className='home'>
            <Banner
                image={ProjectsBanner}
                description="A random snippet of code." />
        </section>
    )
}
