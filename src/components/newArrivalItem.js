
const NewArrivalItem = (props) => {
    const { image_link, title, price_range, key } = props;

    return (
        <div class="new-arrival-item" key={key}>
            <div class="new-arrival-image">
                <img
                    src={image_link} />
                <div class="heart">
                    <img src="./images/heart.webp" />
                </div>
            </div>
            <div class="new-arrival-desc">
                <p class="new-arrival-text">{title}</p>
                <div class="new-arrival-price">{price_range}</div>
            </div>
        </div>
    )
}

export default NewArrivalItem;