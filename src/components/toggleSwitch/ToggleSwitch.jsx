import React, { useState } from 'react'
import './toggleSwitch.scss'

function toggleSwitch({ isChecked, onChange, left, right }) {
    let [checked, setChecked] = useState(isChecked)
    console.log(isChecked)

    const handleClick = () => {
        onChange()
        setChecked((prev) => !prev)
    }

    return (
        <form className='toggle-switch'>
        <label 
            className='toggle-switch__label' 
            htmlFor={"toggle"}>
                {left}
        </label>
        <div 
            onClick={handleClick} 
            readOnly
            className='toggle-switch__background'>
            <input 
                id="toggle"
                className={`toggle-switch__toggle toggle-switch__toggle--${checked ? "right" : "left"}`} 
                type="checkbox" 
                checked={checked}
                />
        </div>
        <label 
            className='toggle-switch__label' 
            htmlFor={"toggle"}>
                {right}
            </label>
        </form>
    )
}

export default toggleSwitch