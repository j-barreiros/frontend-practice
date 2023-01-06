import styled from 'styled-components';

export const colors = {
    //Primary
    softOrange: 'hsl(35, 77%, 62%)',
    softRed: 'hsl(5, 85%, 63%)',
    //Neutral
    offWhite: 'hsl(36, 100%, 99%)',
    grayBlue: 'hsl(233, 8%, 79%)',
    darkGrayBlue: 'hsl(236, 13%, 42%)',
    darkBlue: 'hsl(240, 100%, 5%)',
}

type StyledNewsHomepageProps = {
    introDesktopImage: string,
    introMobileImage: string,
    isMobileMenuOpen: boolean;
}

const StyledNewsHomepage = styled.main<StyledNewsHomepageProps>`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');

    padding: 60px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    * {
        font-family: 'Inter', sans-serif;
    }

    .navbar {
        width: 100%;    
        max-width: 1500px;
        position: relative;
        padding: 20px 0px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
        }

        .mobile-menu {
            width: 65vw;
            height: 100vh;
            position: absolute;
            right: ${props => props.isMobileMenuOpen ? '0px' : '-450px'};
            top: 0px;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            transition: right 0.5s;

            .nav-link {
                margin-left: 30px;
                text-decoration: none;
                color: ${colors.darkGrayBlue};
                transition: color 0.2s;
                &:hover {
                    color: ${colors.softRed}
                }
            }
        }

        .links {
            .nav-link {
                margin-left: 30px;
                text-decoration: none;
                color: ${colors.darkGrayBlue};
                transition: color 0.2s;
                &:hover {
                    color: ${colors.softRed}
                }
            }
        }
    }

    .hero {
        max-width: 1500px;
        margin-bottom: 30px;
        display: grid;
        height: 526px;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 40px;
        overflow: auto;

        .intro {
            height: 100%;
            grid-column: 1/3;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(5, 20%);

            .intro-image {
                grid-column: 1/3;
                grid-row: 1/4;
                background-image: url(${props => props.introDesktopImage});
                background-size: cover;
                display: inline-block;
            }

            .intro-title {
                grid-row: 4/6;
                padding-right: 5vw;
                display: flex;
                align-items: center;
                font-size: clamp(40px, 4vw, 50px);
                font-weight: 700;
                color: ${colors.darkBlue}
            }
            
            .intro-invite {
                grid-row: 4/6;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-evenly;
                .intro-about {
                    color: ${colors.darkGrayBlue};
                    line-height: 25px;
                }

                .intro-btn {
                    border: none;
                    background-color: ${colors.softRed};
                    color: ${colors.offWhite};
                    font-size: 15px;
                    padding: 15px 40px;
                }
            }
        }

        .news {
            padding: 35px 30px 0px 30px;
            background-color: ${colors.darkBlue};
            .news-title {
                color: ${colors.softOrange};
                font-size: 30px;
                margin-bottom: 30px;
            }

            article:last-child {
                margin-bottom: 0px;
                border: none;
            }
        }
    }

    .trending {
        max-width: 1500px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 40px;
    }

    @media (max-width: 1235px) {
        padding: 60px 15px;
        .hero {
            grid-column-gap: 15px;
            .news {
                padding: 30px 25px 0px 25px;
                .news-title {
                    margin-bottom: max(5px, 2vw);
                }
            }
        }
        
    }

    @media (max-width: 1000px) {
        .hero {
            height: fit-content;
            grid-template-rows: 526px 400px;

            .intro {
                grid-column: 1/4;
            }

            .news {
                grid-column: 1/4;
                grid-row: 2;
            }
        }
    }

    @media (max-width: 660px) {
        .trending {
            grid-template-columns: 1fr;
            grid-row-gap: 30px;
        }
    }


    @media (max-width: 550px) {
        .navbar {
            .links {
                display: none;
            }

            .mobile-menu-btn {
                display: block;
            }
        }

        .hero {
            row-gap: 30px;
            .intro {
                grid-template-rows: repeat(7, 1fr);
                .intro-title {
                    grid-column: 1/4;
                }
                .intro-invite {
                    grid-column: 1/4;
                    grid-row: 6/8;
                }
            }
        }
    }

`

export default StyledNewsHomepage;