import React, {useEffect, useState} from "react";
import './multiple-choice.css'
import {Option} from "../../api/questions-api";

interface MultipleChoiceProps {
    options: Option[] | undefined;
    onSelected: (value: number) => void;
}

interface ChoiceParams {
    option: Option;
    onSelect: () => void;
    selected: boolean;
}

const Choice = (props: ChoiceParams) => {
    const {option, onSelect, selected} = props;
    const style = selected ? 'divOptionSelected' : 'divOptionUnselected';
    return (
        <div className={`${style} divGenericOption`} onClick={() => onSelect()}>{option.label}</div>
    )
}

const MultipleChoice = (props: MultipleChoiceProps) => {
    const {options} = props;
    const [itemSelected, setItemSelected] = useState();
    useEffect(() => {
        props.onSelected(itemSelected);
    }, [itemSelected, props])
    if (!options) return null;
    return (
        <>
            {options.map(option =>
                <Choice option={option} onSelect={(() => setItemSelected(option.value))}
                        selected={itemSelected === option.value}/>
            )}
        </>
    )
}

export default MultipleChoice;
