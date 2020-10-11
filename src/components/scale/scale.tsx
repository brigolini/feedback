import React, {useEffect, useState} from "react";


interface ItemProps {
    value: number;
    filled: boolean
    onHover: (value: number) => void;
    onClick: (value: number) => void;
}

const Item = (props: ItemProps) => {
    const {value, filled, onHover, onClick} = props;
    return filled ?
        <div style={{width: '4em', height: '4em', backgroundColor: '#AB61E5', border: '1px solid #E5E5E5'}}
             onMouseEnter={() => onHover(value)} onClick={() => onClick(value)}/>
        :
        <div style={{width: '4em', height: '4em', backgroundColor: "white", border: '1px solid #E5E5E5'}}
             onMouseEnter={() => onHover(value)} onClick={() => onClick(value)}/>
}


interface ScaleProps {
    onChange: (value: number) => void
}

const Scale = (props: ScaleProps) => {
    const [valueHover, setValueHover] = useState(0);
    const [valueClick, setValueClick] = useState(0);
    const {onChange} = props;
    useEffect(() => {
        onChange(valueClick);
    }, [valueClick, onChange])
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            <div style={{display: "flex", width: '24em', height: '4em', justifyContent: 'space-between'}}
                 onMouseLeave={() => setValueHover(valueClick)}>
                {values.map(item => <Item value={item} onHover={(value) => setValueHover(value)}
                                          filled={valueHover >= item} onClick={(value) => setValueClick(value)}/>)}
            </div>
        </>
    )
}

export default Scale
