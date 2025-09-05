import "./inputfield.css";

const InputField = (props) => {
    const { type, placeholder, name, label, onChange, defaultValue } = props;

    return (
        <div>
            <label className="input-label">{label}</label>
            <input
                className="resuseable-input"
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
                defaultValue={defaultValue}
            />
        </div>
    )
}

export default InputField;