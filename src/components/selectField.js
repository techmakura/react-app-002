import "./inputfield.css";

const SelectField = (props) => {

    const { options, name, label, onChange } = props;

    return (
        <div>
            <label className="input-label">{label}</label>
            <select name={name} onChange={onChange}>
                {options.length > 0 && options.map((value, index) => (
                    <option key={index} value={value._id}>{value.name}</option>
                ))}
            </select>
        </div>

    )
}

export default SelectField;