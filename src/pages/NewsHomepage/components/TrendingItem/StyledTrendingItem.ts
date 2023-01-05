import styled from "styled-components";
import { colors } from "../../StyledNewsHomepage";

const StyledTrendingItem = styled.article`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    
    .trending-image {
        width: 100%;
    }

    .trending-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        grid-column: 2/4;

        .trending-rank {
            font-size: 35px;
            color: ${colors.grayBlue};
        }

        .trending-title {
            color: ${colors.darkBlue};
        }

        .trending-text {
            color: ${colors.darkGrayBlue};
            line-height: 25px;
        }

    }
`

export default StyledTrendingItem;