import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { BsExclamationCircle } from 'react-icons/bs'
import ProjectDetailsModal from '../components/ProjectDetailsModal'


const Projects = () => {


    const [projectsState, setProjectsState] = useState([])

    useEffect(() => {
        if (projectsState.length === 0) {
            fetch("/data/projects.json").then(res => res.json()).then(data => {
                setProjectsState(data)

            });

        }
    }, [])

    const [project, setProject] = useState()

    const onDetails = project => setProject(project);




    return (
        <>
            <div id='projects' className={`min-h-screen pt-[100px] pb-5 `}>
                <Container>
                    <SectionTitle>Projects</SectionTitle>
                    <div className={`
                    p-2

                    grid grid-cols-1 gap-5

                    md:grid-cols-2

                    lg:grid-cols-3
                    
                `}>
                        {projectsState.map(p => <ProjectItem onDetails={onDetails} key={p.id} item={p} />)}
                    </div>
                </Container>
            </div>
            <ProjectDetailsModal project={project} onHide={() => setProject(null)} />
        </>
    )
}

export default Projects


function ProjectItem({ item, onDetails }) {
    return (
        <>
            <div className={`
        w-full bg-slate-800 rounded shadow-md shadow-slate-900
        p-2 flex flex-col gap-2
        `}>
                <div className='flex justify-between'>
                    <div className='font-semibold text-sm'>{item.title}</div>
                    <Button onClick={() => onDetails(item)}><BsExclamationCircle /></Button>
                </div>
                {/* images */}

                <img className='w-full h-[300px] bg-black object-contain' src={item.images[0]} alt="p" />

                {/* techs */}

                <div className='text-sm'>Technologies :</div>
                <div className='flex gap-2 flex-wrap text-sm'>
                    {item.techs.map((t, i) => (
                        <Button key={i}>{t}</Button>
                    ))}
                </div>
            </div >


        </>
    )
}
