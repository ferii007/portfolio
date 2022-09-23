
import { myBiodata, listSkills, myPrimarySkills, myOtherSkills, avatar, resumeLinks } from '../../../data/About'
import axios from 'axios';
import { useState } from 'react';
import WikipediaDataModal from './WikipediaDataModal';

const AboutSection = () => {

    const[toggleState, setToogleState] = useState(1);
    const [wikipediaApiData, setWikipediaApiData] = useState([]);
    const [showWikipediaDataModal, setShowWikipediaDataModal] = useState(false)
    const closeWikipediaDataModal = () => setShowWikipediaDataModal(false)

    const toggleTab = (index) => {
        setToogleState(index)
    }

    async function wikipediaAPI(param) {
        await axios.get(`/w/api.php?action=query&format=json&prop=extracts&explaintext&redirects=1&titles=${param}&formatversion=2`)
             .then(res => {
              const content = res.data.query.pages
              setShowWikipediaDataModal(true)
              setWikipediaApiData(content)
             }).catch(error => {
                console.log(error)
             });
    }

    return(
        <article className='max-width-01'>
            <div className="text-center mt-14 mb-8">
                <h1 className="text-title">About Me</h1>
                {/* <h2 className="mt-2 text-secondary-title">Let's be Friends</h2> */}
            </div>

            <div className="py-10 p-0" id="horizontal-section" >
                <div className="sticky top-24 lg:top-0 w-full overflow-hidden">
                    <div className="relative flex" id="element-wrapper">
                        <div className='about-card relative'>
                            <div className='pl-6 w-[60%] lg:w-[80%]'>
                                <h1 className='text-secondary-title text-2xl'>Hello World,</h1>

                                <p className='text-paragraph'>My name is Feri Ramdani. Ussually called Pei or Feri. I'm a Junior Web Developer and Front End is one I really like.</p>
                            </div>

                            <div className='absolute bottom-0 right-0 w-72 lg:w-80 translate-x-10 lg:translate-x-64'>
                                <img src={avatar} alt="It's Me" />
                            </div>
                        </div>

                        <div className='about-card lg:pl-96 lg:w-[62rem]'>
                            <h1 className="text-secondary-title text-2xl translate-x-14">My Biodata</h1>

                            <div className="text-sub-title">
                                <ul>
                                    {
                                        myBiodata.map((biodata, i) => (
                                            <li key={i} className="flex gap-4 mt-5">
                                                <p className="w-32">{biodata.key}</p>
                                                <p>:</p>
                                                <p>{biodata.value}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className='about-card w-[70rem] lg:w-[80rem]'>
                            <h1 className='text-secondary-title text-2xl'>Skills</h1>

                            <div className='text-secondary-title text-xl flex gap-10 my-4'>
                                {
                                    listSkills.map((listSkill, i) => (
                                        <div key={i} className={`cursor-pointer hover:text-primaryLight dark:hover:text-primaryDark ${toggleState === listSkill.tab ? 'active-tab-skill' : 'block'}`} onClick={() => toggleTab(listSkill.tab)}>
                                            {listSkill.name}
                                        </div>
                                    ))
                                }
                            </div>

                            <div className={`${toggleState === 1 ? 'block' : 'hidden'}`}>
                                <div className='grid grid-cols-3 gap-10 md:grid-cols-4'>
                                    {
                                        myPrimarySkills.map((myPrimarySkill, i) => (
                                            <div key={i} className='skills-card flex gap-6 px-5 py-4 items-center cursor-pointer' onClick={() => wikipediaAPI(myPrimarySkill.wikipediaTitle)}>
                                                <div>
                                                    <img src={myPrimarySkill.icon} alt="My Primary Skill" className='w-20 h-full' />
                                                </div>

                                                <div>
                                                    <h1 className="text-title text-2xl">{myPrimarySkill.name}</h1>

                                                    <h3 className="text-sub-title text-md">{myPrimarySkill.level}</h3>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className={`${toggleState === 2 ? 'block' : 'hidden'}`}>
                                <div className='grid grid-cols-3 gap-10 md:grid-cols-4'>
                                    {
                                        myOtherSkills.map((myOtherSkill, i) => (
                                            <div key={i} className='skills-card flex gap-6 px-5 py-4 items-center cursor-pointer' onClick={() => wikipediaAPI(myOtherSkill.wikipediaTitle)}>
                                                <div>
                                                    <img src={myOtherSkill.icon} alt="My Primary Skill" className='w-20 h-full' />
                                                </div>

                                                <div>
                                                    <h1 className="text-title text-2xl">{myOtherSkill.name}</h1>

                                                    <h3 className="text-sub-title text-md">{myOtherSkill.level}</h3>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='about-card w-[25rem]'>
                            <div className='grid place-items-center lg:place-items-end'>
                                <div className='translate-y-20 bg-bgLight2 dark:bg-bgDark2 h-96 w-72 rounded-md'>
                                    <div className='flex justify-center items-center leading-none'>
                                    <img
                                        src="https://images.unsplash.com/photo-1585554414787-09b821c321c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                        alt="pic"
                                        className="h-40 w-60 rounded-md shadow-xl mt-6 -translate-y-10"
                                    />
                                    </div>

                                    <div className='flex flex-col justify-center'>
                                        <a href="#about" className="button-01">
                                            Download CV
                                        </a>
                                    </div>

                                    <div className='flex gap-7 justify-center mt-10'>
                                        {
                                            resumeLinks.map((resumeLink, i) => (
                                                <a key={i} href={resumeLink.link} target='__blank'>
                                                    <img className='w-12' src={resumeLink.icon} alt={resumeLink.name} />
                                                </a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-card w-[15rem] lg:w-[10%]"></div>
                    </div>
                </div>
            </div>

            <WikipediaDataModal wikipediaApiData={wikipediaApiData} visible={showWikipediaDataModal} onClose={closeWikipediaDataModal} />
        </article>
    )

}

export default AboutSection