import React, {useState} from 'react'
import logo from '../components/images/CalebMitchellAlt.png'

export default function Header(props) {

    const [toggleNav, setToggleNav] = useState(false);

    const handleContentChange = (content) => {
        props.setShowContent(content);
        setToggleNav(false);
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return (
        <header>
            <nav className='navbar navbar-expand-lg'>
                {/* <button className='navbar-brand'>
                    <img src={logo} alt="Caleb Mitchell's Logo" />
                    
                </button> */}
                <h2>React Practice</h2>
                <button className='menuToggle' onClick={() => setToggleNav(true)}>
                    <div className='hamburger-outer'>
                        <div className='hamburger-inner'></div>
                        <div className='hamburger-inner'></div>
                        <div className='hamburger-inner'></div>
                    </div>
                </button>
                {toggleNav &&
                    <div className='menu'>
                        <button className='close-menu' onClick={() => setToggleNav(false)}>
                            &times;
                        </button>
                        <ul>
                            <li onClick={() => handleContentChange('Home')}>Profile</li>
                            <li onClick={() => handleContentChange('Projects')}>Projects</li>
                            {/* TODO - Additional Links Here */}
                        </ul>
                    </div>
                }
            </nav>
        </header>
    )
}
