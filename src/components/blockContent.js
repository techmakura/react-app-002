
const BlockContent = (props) => {
    const { paragraph, image_link, header, key, span } = props;

    return (
        <div class="block-content" key={key}>
            <img src={image_link} />
            <div class="block-content-text">
                <p>{paragraph}</p>
                <h2>{header}<span>{span}</span></h2>
            </div>
        </div>
    )
}

export default BlockContent;