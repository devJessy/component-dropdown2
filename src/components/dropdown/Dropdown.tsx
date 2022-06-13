import './style.scss'
import React, { useState, useEffect,useRef } from 'react';
import { isTemplateSpan } from 'typescript';
import NarrowIcon from '../icons/NarrowIcon'

interface DropdownProps {
    items : {title : string, value : any }[]
    default?: number
}

const Dropdown = (props : DropdownProps) => {
    const [textValue, setTextValue] = useState("Select the Index");
    const [showItems, setShowItems] = useState(0);
    const dropBox = useRef<any>();

    useEffect(() => {
        if(props.items.length > 0){
            if(props.default){
                setTextValue(props.items[props.default - 1].title)
            } else {
                setTextValue(props.items[0].title)
            }
        }
    }, [])

    const handle = (val : string) => {
        setTextValue(val);
        setShowItems(0);
    }
    useEffect(() => {
        const handleClickEvent = (event: any) => {
            if (dropBox?.current && !dropBox.current.contains(event.target)) {
                setShowItems(0);
            }
        };
        window.addEventListener("click", handleClickEvent);
        return () => {
            window.removeEventListener("click", handleClickEvent);
        };
    }, []);

    return (
        <div className='dropdown-container' ref={dropBox}>
            <div className='dropdown-header' onClick={() => setShowItems(1)}>
                <div>
                    {textValue}
                </div>
                <div>
                    <NarrowIcon />
                </div>
            </div>
            <div className='dropdown-items' style={{opacity : showItems, visibility : showItems ? 'visible' : 'hidden'}}>
                {
                   props.items.map((row : any, index) => {
                        return (
                            <div key={index} className='dropdown-item' onClick={() => handle(row.title)}>{row.title}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dropdown;