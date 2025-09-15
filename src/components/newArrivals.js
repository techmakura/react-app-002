import NewArrivalItem from "./newArrivalItem";

const NewArrivals = () => {

    const NewArrivalItems = [
        {
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2024/07/time-is-a-mother-12-600x904.jpg",
            title: "Iron Widow",
            price_range: "$40.00 - $75.00"
        },
        {
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2024/07/time-is-a-mother-31-600x904.jpg",
            title: "Iron Widow",
            price_range: "$40.00 - $75.00"
        },
        {
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2024/07/time-is-a-mother-12-600x904.jpg",
            title: "Iron Widow",
            price_range: "$40.00 - $75.00"
        },
        {
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2024/07/time-is-a-mother-31-600x904.jpg",
            title: "Iron Widow",
            price_range: "$40.00 - $75.00"
        },
        {
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2024/07/time-is-a-mother-12-600x904.jpg",
            title: "Iron Widow",
            price_range: "$40.00 - $75.00"
        },
        {
            image_link: "https://boosin.wpbingosite.com/wp-content/uploads/2024/07/time-is-a-mother-31-600x904.jpg",
            title: "Iron Widow",
            price_range: "$40.00 - $75.00"
        }
    ]

    return (
        <section>
            <div class="section-title">
                <h2>New arrivals</h2>
                <a href="#">View All</a>
            </div>

            <div class="new-arrival-list">
                {NewArrivalItems.map((value, index) => (
                    <NewArrivalItem image_link={value.image_link} title={value.title} price_range={value.price_range} key={index} />
                ))}
            </div>
        </section>
    )
}

export default NewArrivals;