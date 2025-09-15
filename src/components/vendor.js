import VendorLogo from './vendorLogo';

const Vendor = () => {

    const vendorLogoList = [
        {
            link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/brand-1.png",
            alt: "brand-1"
        },
        {
            link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/brand-2.png",
            alt: "brand-2"
        },
        {
            link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/brand-3.png",
            alt: "brand-3"
        },
        {
            link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/brand-2.png",
            alt: "brand-4"
        },
        {
            link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/brand-1.png",
            alt: "brand-5"
        },
        {
            link: "https://boosin.wpbingosite.com/wp-content/uploads/2025/02/brand-3.png",
            alt: "brand-6"
        }
    ]

    return (
        <section class="vendor">
            <div class="vendor-logo-wrapper">
                {vendorLogoList.map((value, index) => (
                    <VendorLogo key={index} link={value.link} alt={value.alt} />
                ))}
            </div>
        </section>
    )
}

export default Vendor;