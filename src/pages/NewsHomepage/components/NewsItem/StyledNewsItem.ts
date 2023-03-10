import styled from "styled-components";
import { colors } from "../../StyledNewsHomepage";

const StyledNewsItem = styled.article`
    margin-bottom: 35px;
    border-bottom: 1px solid ${colors.grayBlue};

    .title {
        color: ${colors.offWhite};
        margin-bottom: 15px;
        transition: color 0.5s;
        &:hover {
            color: ${colors.softOrange};
            cursor: pointer;
        }
    }

    .text {
        color: ${colors.grayBlue};
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 30px;
        line-height: 25px;
    }

    @media (max-width: 1235px) {
        margin-bottom: 2vw;

        .text {
            margin-bottom: 2vw;
        }
    }
`

export default StyledNewsItem;