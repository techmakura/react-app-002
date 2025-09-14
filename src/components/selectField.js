import "./inputfield.css";

const SelectField = (props) => {

    const { options, name, label, onChange, selected} = props;

    return (
        <div>
            <label className="input-label">{label}</label>
            <select name={name} onChange={onChange}>
                <option value="">Please select {name}</option>
                {options.length > 0 && options.map((value, index) => (
                    <option key={index} value={value._id} selected={selected === value._id ? true : false} >{value.name}</option>
                ))}
            </select>
        </div>

    )
}

export default SelectField;