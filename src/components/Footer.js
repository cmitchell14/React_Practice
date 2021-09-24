import React from 'react'

export default function Footer() {
//This is the place in our React components where the logic/functionality will be placed.  We can place variables, functions, and React hooks (state management) here. 
const year = new Date().getFullYear();
//The date above will be generated every time the footer is invoked on our site.  

    return (
        <footer className="text-center">
            <p>
                <em>
                    &copy; {year} Caleb Mitchell
                </em>
            </p>
        </footer>
    )
}