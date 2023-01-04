// Style
import StyledNewsItem from "./StyledNewsItem";

type NewsItemProps = {
    title: string,
    text: string,
}

const NewsItem = (props : NewsItemProps) => {
    const {title, text} = props;
    return (
        <StyledNewsItem>
            <h3 className='title'>{title}</h3>
            <p className='text'>{text}</p>
        </StyledNewsItem>
    )
}

export default NewsItem;