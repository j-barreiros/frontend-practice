import StyledHome from "./StyledHome";

import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <StyledHome>
            <h1>Home</h1>
            <Link to='/product-preview'>Product Preview</Link>
            <Link to='/news-homepage'>News Homepage</Link>
        </StyledHome>
    )
}

export default Home;