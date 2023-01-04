import styled from 'styled-components';

export const colors = {
    // Primary
    darkCyan: 'hsl(158, 36%, 37%)',
    veryDarkCyan: 'hsl(150, 37%, 15%)',
    cream: 'hsl(30, 38%, 92%)',
    // Neutral
    darkBlue: 'hsl(212, 21%, 14%)',
    grayBlue: 'hsl(228, 12%, 48%)',
    white: 'hsl(0, 0%, 100%)',
}

type StyledProductPagePreviewProps = {
    desktopImage: string;
    mobileImage: string;
}

const StyledProductPagePreview = styled.main<StyledProductPagePreviewProps>`
    // Fonts
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&display=swap');

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: ${colors.cream};
    .product-box {
        width: 600px;
        height: fit-content;
        display: flex;
        background-color: ${colors.white};
        border-radius: 10px;
        overflow: hidden;
        .product-image {
            width: 50%;
            background-image: url(${props => props.desktopImage});
            background-position: center;
            background-repeat: no-repeat;
            background-size:cover;
        }

        .product-info {
            width: 50%;
            padding: 30px 36px;

            .product-category, .product-about, .price-section > .previous-price {
                font-family: 'Montserrat', sans-serif;
                color: ${colors.grayBlue};
            }

            .product-category {
                margin-bottom: 20px;
                font-size: 12px;
                font-weight: 500;
                letter-spacing: 5px;
            }

            .product-name {
                margin-bottom: 20px;
                font-family: 'Fraunces', serif;
                font-weight: 700;
                font-size: 35px;
                color: ${colors.darkBlue};
                line-height: 30px;
            }
            .product-about {
                margin-bottom: 25px;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
            }
            
            .price-section {
                margin-bottom: 26px;
                display: flex;
                align-items: center;
                .current-price {
                    margin-right: 20px;
                    font-size: 30px;
                    font-family: 'Fraunces', serif;
                    color: ${colors.darkCyan}
                }

                .previous-price {
                    text-decoration-line: line-through;
                    font-weight: 500;
                    font-size: 14px;
                }
            }
            
            .buyBtn {
                width: 100%;
                padding: 15px 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                border-radius: 10px;
                background-color: ${colors.darkCyan};
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                color: ${colors.white};
                .icon {
                    margin-right: 10px;
                }

                &:hover {
                    background-color: ${colors.veryDarkCyan};
                    cursor: pointer;
                }
            }
        }

    }
    @media (max-width: 600px) {
        .product-box {
            width: 400px;
            height: 90vh;
            flex-direction: column;

            .product-image {
                background-image: url(${props => props.mobileImage});
                width: 100%;
                height: 50%;
            }

            .product-info {
                width: 100%;
                .product-about {
                    font-size: 14px;
                }
            }
        }
    }
`

export default StyledProductPagePreview;