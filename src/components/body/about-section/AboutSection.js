
import { myBiodata, listSkills, myPrimarySkills, myOtherSkills, textSay, avatar } from '../../../data/About';
import { useState } from 'react';

const AboutSection = () => {

    const[toggleState, setToogleState] = useState(1);

    const toggleTab = (index) => {
        setToogleState(index)
    }

    return(
        <div className="container">
            <div className="text-center mt-14 mb-8">
                <h1 className="text-title">About Me</h1>
                <h2 className="mt-2 text-sub-title">Let's be Friends</h2>
            </div>

            <div className="pt-10 p-0"  id="horizontal-section">
                <div className="sticky top-24 w-full overflow-hidden">
                    <div className="relative flex items-center content-center justify-items-center" id="element-wrapper">
                        <div className="relative about-card">
                            <h1 className="text-sub-title pl-6 w-[60%]">Hello World</h1>

                            <p className="text-sub-title pl-6 w-[60%]">
                                {textSay}
                            </p>

                            <div className="absolute bottom-0 right-0 w-72 translate-x-10">
                                <img src={avatar} alt="It's Me" />
                            </div>
                        </div>

                        <div className="about-card">
                            <h1 className="text-title mb-7 ml-20">My Biodata</h1>

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

                        <div className="about-card w-[70rem]">
                            <h1 className="text-title">Skills</h1>

                            <div className='text-title text-2xl flex gap-10 my-4'>
                                    {
                                        listSkills.map((listSkill, i) => (
                                            <div key={i} className={`cursor-pointer hover:text-secondaryLight dark:hover:text-secondaryDark ${toggleState === listSkill.tab ? 'active-tab-skill' : 'block'} transition-02`} onClick={() => toggleTab(listSkill.tab)}>
                                                {listSkill.name}
                                            </div>
                                        ))
                                    }
                            </div>

                            <div>
                                <div className={`${toggleState === 1 ? 'block' : 'hidden'}`}>
                                    <div className='grid grid-cols-3 gap-10 md:grid-cols-4'>
                                    {
                                        myPrimarySkills.map((myPrimarySkill, i) => (
                                            <div key={i} className='skills-card flex gap-6 px-5 py-4 items-center cursor-default'>
                                                <div>
                                                    <img src={myPrimarySkill.icon} alt="My Primary Skill" className='w-20 h-full' />
                                                </div>

                                                <div className='font-semibold text-colorDark dark:text-colorLight'>
                                                    <h1 className="text-2xl">{myPrimarySkill.name}</h1>

                                                    <h3 className="text-md">{myPrimarySkill.level}</h3>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    </div>
                                </div>

                                <div className={`${toggleState === 2 ? 'block' : 'hidden'}`}>
                                    <div className='grid grid-cols-4 gap-10'>
                                        {
                                            myOtherSkills.map((myOtherSkill, i) => (
                                                <div key={i} className='skills-card flex gap-6 px-5 py-4 items-center cursor-default'>
                                                <div>
                                                    <img src={myOtherSkill.icon} alt="My Primary Skill" className='w-20 h-full' />
                                                </div>

                                                <div>
                                                    <h1 className="text-2xl font-semibold text-colorLight">{myOtherSkill.name}</h1>

                                                    <h3 className="text-md font-semibold text-colorLight">{myOtherSkill.level}</h3>
                                                </div>
                                            </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-card">
                            <div className="flex gap-12 translate-x-32 translate-y-56">
                                <div>
                                    <a href="#about" className="button-01">
                                        Download CV
                                    </a>
                                </div>

                                <div>
                                <a href="#about" className="button-01">
                                    Contact Me
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className="about-card w-[40rem] md:w-[10rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutSection