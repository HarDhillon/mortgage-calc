interface InputProps {
    type: string,
    label: string,
    name: string,
    max?: number,
    min?: number,
    icon?: React.ReactNode,
    iconPosition?: 'left' | 'right',
    placeholder: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, label, type, max, min, name, icon, iconPosition, placeholder, onChange}:InputProps) => {

    return (
        <>
            <label htmlFor={name}>{ label }</label>
            <div>
                {icon && iconPosition === 'left' && <span className="form-icon">{ icon }</span>}
                <input placeholder={placeholder} onChange={e => onChange(e)} value={value} name={name} id={name} max={max} min={min} type={type} />
                {icon && iconPosition === 'right' && <span className="form-icon">{ icon }</span>}
            </div>
        </>
        
    )
}

export default Input