import React from 'react'
import SectionTitle from '../components/SectionTitle'
import WorkStepCard from '../components/WorkStepCard'

import workStepIcon1 from '../assets/images/WorkStepIcons/step1.png'
import workStepIcon2 from '../assets/images/WorkStepIcons/step2.png'
import workStepIcon3 from '../assets/images/WorkStepIcons/step3.png'

const WorkProcessSteps = [
    {
        title: 'Research and Strategy',
        description: 'Conduct thorough market research to understand target audience behaviors. Submit as many design tasks.',
        icon: workStepIcon1
    },
    {
        title: 'Design and Prototyping',
        description: 'Create wireframes and prototypes to visualize the user experience and interface.',
        icon: workStepIcon2
    },
    {
        title: 'Development',
        description: 'Implement the design into a functional product using modern web technologies.',
        icon: workStepIcon3
    }
]

const WorkProcess: React.FC = () => {
    return (
        <section className='px-6 py-20 flex flex-col items-center justify-center'>
            <SectionTitle tag='WORKFLOW' centered>HOW WE WORK</SectionTitle>
            <div className='flex flex-col md:flex-row items-start gap-6 mt-12'>
                {
                    WorkProcessSteps.map((step, index) => (
                        <WorkStepCard
                            key={index}
                            index={index +1}
                            icon={step.icon}
                            title={step.title}
                            description={step.description} />
                    ))
                }
            </div>
        </section>
    )
}

export default WorkProcess