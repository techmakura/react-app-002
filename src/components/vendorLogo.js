
const VendorLogo = (props) => {
    const { link, alt, key } = props;
    return (
        <div class="vendor-logo" key={key}>
            <img src={link} alt={alt} />
        </div>
    )
}

export default VendorLogo;