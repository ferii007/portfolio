
import { myBiodata, listSkills, myPrimarySkills, myOtherSkills } from '../../../data/About';
import myAvatar from './../../../assets/img/avatar.svg';
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
                                My name is <span>Feri Ramdani.</span> <br />
                                Ussually called Pei or Feri. 
                                I'm a Junior Web Developer and Front End is one I really like.  
                            </p>

                            <div className="absolute bottom-0 right-0 w-72 translate-x-20">
                                <img src={myAvatar} alt="It's Me" />
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

                        <div className="about-card">
                            <h1 className="text-title">Skills</h1>

                            <div className='text-title text-2xl flex gap-10 my-4'>
                                    {
                                        listSkills.map((listSkill, i) => (
                                            <div key={i} className={`cursor-pointer hover:text-secondaryLight dark:hover:text-secondaryDark transition-all duration-300 ${toggleState === listSkill.tab ? 'active-tab-skill' : 'block'}`} onClick={() => toggleTab(listSkill.tab)}>
                                                {listSkill.name}
                                            </div>
                                        ))
                                    }
                            </div>

                            <div>
                                <div className={`${toggleState === 1 ? 'block' : 'hidden'}`}>
                                    <div className='grid grid-cols-4 gap-10'>
                                        {
                                            myPrimarySkills.map((myPrimarySkill, i) => (
                                                <div key={i}>
                                                    <div className='relative group'>
                                                        <img className={`w-32 group-hover:bg-[${myPrimarySkill.bgColor}] group-hover:p-4 group-hover:rounded-xl transition-all duration-300`} src={myPrimarySkill.icon} alt={myPrimarySkill.name} />

                                                        <div className={`absolute bg-black opacity-0 w-full h-full top-0 text-title text-2xl flex flex-wrap justify-center items-center group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:rounded-xl transition-all duration-300`}>
                                                            <h1 className="text-slate-100">{myPrimarySkill.name}</h1>
                                                        </div>
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
                                                <div key={i}>
                                                    <div className='relative group'>
                                                        <img className={`w-32 group-hover:bg-[${myOtherSkill.bgColor}] group-hover:p-4 group-hover:rounded-xl transition-all duration-300`} src={myOtherSkill.icon} alt={myOtherSkill.name} />

                                                        <div className={`absolute bg-black opacity-0 w-full h-full top-0 text-title text-2xl flex flex-wrap justify-center items-center group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:rounded-xl transition-all duration-300`}>
                                                            <h1 className="text-slate-100">{myOtherSkill.name}</h1>
                                                        </div>
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
                                    <a href="#about" className="w-48 bg-primaryLight text-colorLight hover:bg-primaryDark hover:text-colorDark dark:bg-primaryDark dark:text-colorDark dark:hover:bg-primaryLight dark:hover:text-colorLight p-4 mt-8 rounded-xl text-xl font-medium text-center transition-all-01">
                                        Download CV
                                    </a>
                                </div>

                                <div>
                                <a href="#about" className="w-48 bg-primaryLight text-colorLight hover:bg-primaryDark hover:text-colorDark dark:bg-primaryDark dark:text-colorDark dark:hover:bg-primaryLight dark:hover:text-colorLight p-4 mt-8 rounded-xl text-xl font-medium text-center transition-all-01">
                                    Contact Me
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className="about-card"></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutSection