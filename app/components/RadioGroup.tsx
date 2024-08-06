type RadioProps = {
    name: string,
    items: { value: string, label: string }[],
    value: string | null,
    onChange: (value: string) => void;
    legend: string
}


export function RadioGroup({ name, items, value, onChange, legend }: RadioProps) {
    
    const renderedRadioItems = items.map(item => {
        return <div key={item.value}>
            <input
                name={name}
                type="radio"
                value={item.value}
                id={name + item.value}
                checked={value === item.value}
                onChange={e => onChange(e.target.value)}
                required
            /> 
            <label htmlFor={ name + item.value }>{ item.label }</label>
        </div>
    })
    
    return <fieldset>
        <legend>{legend}</legend>
        {renderedRadioItems}

    </fieldset>
}