import React from "react";


interface ItemProps {
    value: number | string;
    index: number;
}

const Item = (props: ItemProps) => {
    const {value, index} = props;
    let bgColor = 'white';
    if ((index > 0) && (index < 4)) bgColor = 'red';
    if ((index > 3) && (index < 8)) bgColor = 'yellow';
    if (index >= 8) bgColor = 'green';

    return index <= value ?
        <div style={{width: '4em', height: '4em', backgroundColor: bgColor, border: '1px solid #E5E5E5'}}/>
        :
        <div style={{width: '4em', height: '4em', backgroundColor: "white", border: '1px solid #E5E5E5'}}/>
}

interface ScaleProps {
    value: number | string;
}

const ReviewScale = (props: ScaleProps) => {
    const {value} = props;
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <>
            <div style={{display: "flex", width: '24em', height: '4em', justifyContent: 'space-between'}}>
                {values.map(item => <Item value={value} key={item} index={item}/>)}
            </div>
        </>
    )
}

export default ReviewScale;
