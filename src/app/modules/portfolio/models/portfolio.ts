export interface Profile {
    name: string;
    title: string;
    phone: string;
    email: string;
    location: string;
    dateOfBirth: string;
    instagramID?: string;
    linkedIn?: string;
    github?: string;
    resumeLink?: string;
}

export interface Education {
    degree: string;
    institution: string;
    university: string;
    startDate: string;
    endDate: string;
    grade?: string;
    about?: string;
}

export interface Experience {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

export interface Skill {
    name: string;
    proficiency: string;  // e.g., 'Beginner', 'Intermediate', 'Advanced'
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export interface Achievement {
    title: string;
    description: string;
    date: string;
}
export interface Language {
    language: string;
    proficiency: string;
}

export interface Portfolio {
    profile: Profile;
    CareerObjective: string;
    education: Education[];
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    achievements: Achievement[];
    hobbies: string[];
    languages: Language[];
}

export const SAMPLE_PORTFOLIO: Portfolio = {

    profile: {
        name: 'P Balaraju',
        title: 'Frontend Developer',
        email: 'pebetibalraj@gmail.com',
        phone: '+918096391184',
        dateOfBirth: '10-04-1999',
        location: 'Film Nagar, Shaikpet, Hyderabad TS',
        linkedIn: 'https://linkedin.com/in/johndoe',
        github: 'https://github.com/Balraj-8096/Balraj-8096'
    },
    CareerObjective: `
    Highly motivated Angular Developer with two of experience in crafting robust and dynamic
web applications. Demonstrated proficiency in leveraging the Angular framework to deliver responsive and user-centric solutions.`,

    education: [
        {
            degree: 'Bachelor of Engineering',
            institution: 'Deccan College of Engineering and Technology, Hyderabad',
            startDate: '2017-08-01',
            endDate: '2020-08-31',
            university: 'Osmania University',
            grade: '68%',
            about: 'Studied core engineering principles with a focus on software development, web technologies, and data structures. Engaged in various practical labs and projects to enhance programming and problem-solving skills.'
        },
        {
            degree: 'Diploma in Engineering',
            institution: 'Govt Polytechnic, Masab Tank',
            startDate: '2014-08-01',
            endDate: '2017-03-31',
            university: 'State Board Of Technical Education & Training',
            grade: '73%',
            about: 'Completed coursework in foundational engineering subjects, focusing on practical skills in electronics, mechanics, and introductory software development.'
        },
        {
            degree: 'SSC',
            institution: 'Govt High School, Hyderabad',
            startDate: '2009-03-01',
            endDate: '2014-05-31',
            university: '',
            grade: '75%',
            about: 'Completed secondary education with an emphasis on science and mathematics. Actively participated in extracurricular science and technology clubs.'
        }
    ],

    experiences: [
        {
            jobTitle: 'Frontend Developer',
            company: 'Health First Tech Technologies',
            startDate: '2022-11-01',
            endDate: '',
            responsibilities: [
                'Design and develop user-friendly and responsive web applications using HTML5, CSS, Angular, and Git.',
                'Collaborate with a team of developers to create visually appealing and interactive websites.',
                'Participate in the entire development lifecycle, from gathering requirements to testing and deployment.',
                'Continuously enhance skills in frontend technologies to stay updated with industry trends and best practices.'
            ]
        }
    ],
    skills: [
        { name: 'Frontend Developer', proficiency: '5' },
        { name: 'Angular', proficiency: '5' },
        { name: 'TypeScript', proficiency: '5' },
        { name: 'Web Applications', proficiency: '5' },
        { name: 'HTML & CSS', proficiency: '5' },
        { name: 'HTML5', proficiency: '5' },
        { name: 'JavaScript', proficiency: '5' },
        { name: 'MySQL', proficiency: '5' },
        { name: 'Git', proficiency: '5' },
        { name: 'Java', proficiency: '5' }
    ],
    projects: [
        {
            title: 'E-Commerce Website',
            description: 'Developed a full-stack e-commerce website using Angular, Node.js, and MongoDB.',
            technologies: ['Angular', 'Node.js', 'MongoDB'],
            link: 'https://myecommerce.com'
        },
        {
            title: 'Personal Portfolio',
            description: 'Created a personal portfolio website to showcase projects and skills.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://johnportfolio.com'
        }
    ],
    achievements: [
        {
            title: 'Best Employee of the Year 2023',
            description: 'Awarded Best Employee of the Year for exceptional performance at Health First Tech Technologies.',
            date: '2023-12-31'
        },
        {
            title: 'Best Employee of the Year 2024',
            description: 'Awarded Best Employee of the Year for continued outstanding contributions at Health First Tech Technologies.',
            date: '2024-03-31'
        }
    ],
    hobbies: [
        'Learning new things',
        'Traveling',
        'Crafting',
        'Photography',
        'Listening to music',
        'Outdoor activities'
    ],
    languages: [
        { language: 'Telugu', proficiency: '★★★★☆' },
        { language: 'English', proficiency: '★★★☆☆' },
        { language: 'Hindi', proficiency: '★★☆☆☆' }
    ]
};