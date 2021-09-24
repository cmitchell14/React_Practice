import React from 'react'

//We will use this component at the top of each "page" of content, creating a banner image that will display a heading and an image.  We create the HTML structure below, but to make this component reusable, we can pass props through from the parent to this child component.  Parents of this component include Home, AboutReact, Resources, SupportingTech, and ReactTerms.  In order to pass the props, we have to include props in the parameters of the function (see below).
export default function Banner(props) {
    return (
        <article className="banner">
            {/* Below we call to props.variableName to access the value of the prop being passed from the parent to child.  See the call to the Banner component in AboutReact.js to see the complete implemenation. */}
            <img src={props.image} alt={props.description} className='fixIt' />
        </article>
    )
}