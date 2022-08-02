
import { useEffect } from "react";
import myAvatar from './../../../assets/img/avatar.svg';
import htmlIcon from './../../../assets/img/icon/html-icon.svg';
import cssIcon from './../../../assets/img/icon/css-icon.svg';
import jsIcon from './../../../assets/img/icon/js-icon.svg';
import phpIcon from './../../../assets/img/icon/php-icon.svg';
import reactIcon from './../../../assets/img/icon/react-icon.svg';
import bootstrapIcon from './../../../assets/img/icon/bootstrap-icon.svg';
import tailwindIcon from './../../../assets/img/icon/tailwind-icon.svg';
import laravelIcon from './../../../assets/img/icon/laravel-icon.svg';

const AboutSection = () => {

    const myBiodata = [
        {
            key: 'Place of Birth',
            value: 'Bandung'
        },

        {
            key: 'Date of Birth',
            value: 'Feb 02 2003'
        },

        {
            key: 'Gender',
            value: 'Male'
        },

        {
            key: 'Nationally',
            value: 'Indonesia'
        },

        {
            key: 'Religion',
            value: 'Islam'
        },

        {
            key: 'Address',
            value: 'Bandung, Kopo Street'
        },
    ];

    const mySkills = [
        {
            name: "HTML",
            icon: htmlIcon,
            level: "Expert",
            bgColor: '#ef652a'
        },

        {
            name: "CSS",
            icon: cssIcon,
            level: "Expert",
            bgColor: '#1572b6'
        },

        {
            name: "JS",
            icon: jsIcon,
            level: "Intermediate",
            bgColor: '#f7df1e'
        },

        {
            name: "PHP",
            icon: phpIcon,
            level: "Intermediate",
            bgColor: '#6181B6'
        },

        {
            name: "React",
            icon: reactIcon,
            level: "Beginner",
            bgColor: '#333'
        },

        {
            name: "Bootstrap",
            icon: bootstrapIcon,
            level: "Expert",
            bgColor: '#563D7C'
        },

        {
            name: "TailwindCSS",
            icon: tailwindIcon,
            level: "Expert",
            bgColor: '#f7f0f0'
        },

        {
            name: "Laravel",
            icon: laravelIcon,
            level: "Beginner",
            bgColor: '#f7f0f0'
        },
    ];

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
                            <h1 className="text-title mb-7">Skills</h1>

                            <div className="grid grid-cols-4 gap-10 justify-between items-center">
                                {
                                    mySkills.map((mySkill, i) => (
                                        <div key={i} className="relative w-full mt-16 group">
                                            <div className="absolute w-full h-full flex flex-col items-center justify-center cursor-default opacity-0 bg-black group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:rounded-xl transition-all duration-300">
                                                <h1 className="text-rose-500">{mySkill.name}</h1>
                                                <h1 className="">{mySkill.level}</h1>
                                            </div>
                                            <img className={`w-96 group-hover:bg-[${mySkill.bgColor}] group-hover:rounded-xl group-hover:p-4 transition-all duration-300`}  src={mySkill.icon} alt="" />
                                        </div>
                                    ))
                                }
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