// Style
import StyledNewsHomepage from "./StyledNewsHomepage";

// Components
import NewsItem from "./components/NewsItem/NewsItem";


// Images
import introDesktop from './imgs/intro-desktop.jpg';
import introMobile from './imgs/intro-mobile.jpg';
import pc from './imgs/pc.jpg';
import keyboard from './imgs/keyboard.jpg';
import gamer from './imgs/gamer.jpg';
import TrendingItem from "./components/TrendingItem/TrendingItem";
import { Logo, OpenMenuIcon, CloseMenuIcon } from './imgs/Icons'
import { useState } from "react";

const NewsHomepage = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const news = [
        {
            title: 'Hydrogen VS Electric Cars',
            text: 'Will hydrogen-fueled cars ever catch up to EVs?',
        },
        {
            title: 'The Downsides of AI Artistry',
            text: 'What are the possible adverse effects of on-demand AI image generation?',
        },
        {
            title: 'Is VC Funding Drying Up?',
            text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
        }
    ]

    const trending = [
        {
            image: pc,
            title: 'Reviving Retro PCs',
            text: 'What happens when old PCs are given modern upgrades?',
        },
        {
            image: keyboard,
            title: 'Top 10 Laptops of 2022',
            text: 'Our best picks for various needs and budgets.',
        },
        {
            image: gamer,
            title: 'The Growth of Gaming',
            text: 'How the pandemic has sparked fresh opportunities.',
        }
    ]

    return (
        <StyledNewsHomepage introDesktopImage={introDesktop} introMobileImage={introMobile} isMobileMenuOpen={isMobileMenuOpen}>
            <section className='navbar'>
                <Logo />
                <nav className='links'>
                    <a className='nav-link' href='#'>Home</a>
                    <a className='nav-link' href='#'>News</a>
                    <a className='nav-link' href='#'>Popular</a>
                    <a className='nav-link' href='#'>Treding</a>
                    <a className='nav-link' href='#'>Categories</a>
                </nav>
                <button className='mobile-menu-btn' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <OpenMenuIcon />
                </button>

                <nav className='mobile-menu'>
                    <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <CloseMenuIcon />
                    </button>
                    <a className='nav-link' href='#'>Home</a>
                    <a className='nav-link' href='#'>News</a>
                    <a className='nav-link' href='#'>Popular</a>
                    <a className='nav-link' href='#'>Treding</a>
                    <a className='nav-link' href='#'>Categories</a>
                </nav>
            </section>

            <section className='hero'>
                <section className='intro'>
                    <section className='intro-image'></section>
                    <h1 className='intro-title'>The Bright Future of Web 3.0?</h1>
                    <div className='intro-invite'>
                        <p className='intro-about'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?</p>
                        <button className='intro-btn'>READ MORE</button>
                    </div>
                </section>

                <section className='news'>
                    <h2 className='news-title'>New</h2>
                    {news.map(n => <NewsItem title={n.title} text={n.text} />)}
                </section>
            </section>

            <section className='trending'>
                {
                    trending.slice(0, 3).map((t, index) => {
                        return <TrendingItem image={t.image} rank={index + 1} title={t.title} text={t.text} />
                    })
                }
            </section>
        </StyledNewsHomepage>
    )
}

export default NewsHomepage;