import React from 'react'

function ProjectList(props) {
    return (
        <div className="images_container">
            {props.projects.map((project) => {
                return (
                    <div key={project.id}>
                        <img className='images_item' src={project.img} alt='images_item'></img>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectList
