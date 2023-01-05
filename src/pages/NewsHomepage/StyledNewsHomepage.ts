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
}

const StyledNewsHomepage = styled.main<StyledNewsHomepageProps>`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');

    padding: 60px 40px;

    * {
        font-family: 'Inter', sans-serif;
    }

    .navbar {
        padding: 20px 0px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

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
                font-size: clamp(4px, 4vw, 4.5vw);
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
                    color: ${colors.darkGrayBlue}
                }

                .intro-btn {
                    border: none;
                    background-color: ${colors.softRed};
                    color: ${colors.offWhite};
                    font-size: 15px;
                    padding: 15px 15px;
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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 40px;
    }

    @media (max-width: 1235px) {
        padding: 0px;
    }

`

export default StyledNewsHomepage;