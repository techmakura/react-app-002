import BlockContent from "./blockContent";

const Block = () => {

    const BlockContentData = [
        {
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/banner-21.jpg",
            paragraph: "if we learn from our",
            header: "stories from a",
            span: "bookstore"
        },
        {
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/banner-20.jpg",
            paragraph: "if we learn from our",
            header: "stories from a ",
            span: "bookstore"
        },
        {
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/banner-22.jpg",
            paragraph: "if we learn from our",
            header: "stories from a",
            span: "bookstore"

        }
    ]

    return (
        <section class="block">
            {BlockContentData.map((value, index) => (
                <BlockContent key={index} paragraph={value.paragraph} image_link={value.image_link} header={value.header} span={value.span} />
            ))}
        </section>
    )
}

export default Block;