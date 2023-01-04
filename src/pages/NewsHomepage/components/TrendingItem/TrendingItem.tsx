// Style
import StyledTrendingItem from "./StyledTrendingItem";

type TrendinItemProps = {
    image: string,
    rank: number,
    title: string,
    text: string,
}

const TrendingItem = (props : TrendinItemProps) => {
    const {image, rank, title, text} = props;

    return (
        <StyledTrendingItem>
            <img className="trending-image" src={image}/>
            <div className="trending-info">
                <h4 className='trending-rank'>{rank}</h4>
                <h3 className='trending-title'>{title}</h3>
                <p className='trending-text'>{text}</p>
            </div>
        </StyledTrendingItem>
    )
}

export default TrendingItem;