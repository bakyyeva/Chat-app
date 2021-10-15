import React from 'react';
import Input from '../../../../components/input';

export default function SearchInput({handleOnChange}) {
     
    return (
        <div className="search-input"> 
            <Input 
            placeholder="Search"
            type ="text"
            onChange={(e) => {
                handleOnChange(e.target.value)
            }} />
        </div>
    )
}
