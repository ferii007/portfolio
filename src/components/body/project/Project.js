
import { ProjectsData } from "../../../data/Project"


const Project = () => {

    return(
        <article className="max-width-01">
            <div className="text-center mb-8">
                <h1 className="text-title">My Project</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center text-center px-5 md:px-16 lg:px-36 lg:gap-16">
                {
                    ProjectsData.map((ProjectData) => (
                        <div 
                            key={ProjectData.id}
                            className='relative skills-card w-full h-[38rem] rounded-lg'>
                                <img src="https://paperpillar.com/assets/images/calendar-works.jpg" alt="" className="w-full h-[20rem] rounded-t-lg" />
                                
                                <h1 className="text-title mt-10 mb-4">{ProjectData.title}</h1>

                                <h3 className="text-secondary-title">{ProjectData.subTitle}</h3>

                                <div className="flex absolute bottom-0 w-full justify-between gap-4 text-sub-title bg-light-gradient2 dark:bg-dark-gradient2">
                                    <div className="w-1/2 py-2 flex items-center justify-center">
                                        <a href="#test">View Description</a>
                                    </div>

                                    <div className="w-1/2 flex items-center justify-center">
                                        <a href={ProjectData.link}>View Project</a>
                                    </div>
                                </div>
                        </div>
                    ))
                }
            </div>
        </article>
    )

}

export default Project