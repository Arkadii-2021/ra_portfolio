import React from 'react'


function Toolbar({ filters, selected, onSelectFilter }) {
    const onFilter = (selected) => {
        onSelectFilter(selected)
    }
	
    return (
        <div className='select_cnt'>
            {filters.map((filter) => {
                return <button className="btn" key={filter} onClick={() => onFilter(filter)}>{filter}</button>
            })}
        </div>
    )
}


export default Toolbar
