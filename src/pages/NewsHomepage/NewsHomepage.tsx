// Style
import StyledNewsHomePage from "./StyledNewsHomepage";

// Images
import introDesktop from './imgs/intro-desktop.jpg';

const NewsHomepage = () => {
    return (
        <StyledNewsHomePage>
            <section className='navbar'>
                <img className='logo' src='' />
                <nav className='links'>
                    <a className='nav-link' href='#'>Home</a>
                    <a className='nav-link' href='#'>News</a>
                    <a className='nav-link' href='#'>Popular</a>
                    <a className='nav-link' href='#'>Treding</a>
                    <a className='nav-link' href='#'>Categories</a>
                </nav>
            </section>

            <section className='hero'>
                <section className='intro'>
                    <img className='intro-image' src={introDesktop} />
                    <h1 className='intro-title'>The Bright Future of Web 3.0?</h1>
                    <div className=''>
                        <p className='intro-about'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?</p>
                        <button className='intro-btn'>READ MORE</button>
                    </div>
                </section>

                <section className='news'>
                    <h2 className='news-title'>New</h2>
                    <article className='news-item'>
                        <h3 className='news-item-title'>Hydrogen VS Electric Cars</h3>
                    </article>
                </section>
            </section>
        </StyledNewsHomePage>
    )
}

export default NewsHomepage;