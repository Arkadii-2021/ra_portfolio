import React from 'react';
import ProjectList from './ProjectList';
import imageLists from '../ImagesList';
import Toolbar from './Toolbar';
import { useState } from 'react';
import { v4 } from 'uuid';


function Portfolio(props) {
  const [selected, setSelected] = useState('All');
  const listImage = [...imageLists].map((imgEl) => {
    return {id: v4(), ...imgEl}
  });
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const filterData = Array.from(listImage).filter((item) => item.category === selected)
  const onSelectedFilter = (category) => {
    return setSelected(category);
  }

  return (
    <>
    <Toolbar filters={filters}
    selected = {selected}
    onSelectFilter={onSelectedFilter} />
    <ProjectList projects={filterData.length ? filterData : listImage}/>
    </>
  )
}

export default Portfolio


