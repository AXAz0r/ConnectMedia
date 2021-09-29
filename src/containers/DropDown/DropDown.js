import React from 'react'
import arrowDown from '../../assets/img/SecondHeader/arrowDown.svg'
// import '../../components/Home/Home.scss'
import './DropDown.scss'


function DropDown({ options, handleChangeOptions, label, isItOpen }) {

    return (
        <>
            <p >{label} </p><img src={arrowDown} alt="arrow down" />
            {isItOpen && <div className='options'>
                {options?.map((el, i) => {
                    console.log(el);
                    return <div key={i} onClick={() => handleChangeOptions(el)}><p>{el?.name ? el.name : 'No name'}</p></div>
                })}
            </div>}
        </>
    )
}

export default DropDown
