

export const navigationsLinksData = [
    {text:'HOME', path:'/'},
    {text:'WHO ARE WE', path:'/how-to-help', subLinks:[
        {text:'About us', path:'/about'},
        {text:'Projects', path:'/#projects'},
        {text:'Support & Partners', path:'donate'},
        {text:'Our Team', path:'donate'},
        {text:'Legal Structure', path:'donate'},
        {text:'Anual Report', path:'donate'},
    ]},
    {text:'GET INVOLVED', path:'/children', 
        subLinks:[
            {text:'Sponsor Child', path:'/children'},
            {text:'Make donation', path:'/donate'},
            {text:'Become a member', path:'/become-a-member'},
            {text:'Volunteer', path:'/volunteer'},
            {text:'Internship', path:'/internship'},
            {text:'Jobs', path:'/jobs'},
            {text:'News latter', path:'/'},
        ],
    },
    {text:'SPONSOR CHILD', path:'/children'},
    {text:'GIVE GIFT', path:'/'},
]

export const childrenDataDb = [
    {
        id:'2sa',
        name:'Kon Akech',
        gender:'male',
        age:14,
        avatar:process.env.PUBLIC_URL+'/images/avatars/image-1.png'
    },
    {
        id:'2edsa',
        name:'James John',
        gender:'male',
        age:14,
        avatar:process.env.PUBLIC_URL+'/images/avatars/image-2.png'
    },
    {
        id:'2sdsa',
        name:'Suzan Malik',
        gender:'male',
        age:14,
        avatar:process.env.PUBLIC_URL+'/images/avatars/image-3.png'
    },
    {
        id:'2sa',
        name:'Kon Akech',
        gender:'male',
        age:14,
        avatar:process.env.PUBLIC_URL+'/images/avatars/image-4.png'
    },
    {
        id:'2edsa',
        name:'James John',
        gender:'male',
        age:14,
        avatar:process.env.PUBLIC_URL+'/images/avatars/image-5.png'
    },
    {
        id:'2sdsa',
        name:'Suzan Malik',
        gender:'male',
        age:14,
        avatar:process.env.PUBLIC_URL+'/images/avatars/image-6.png'
    },
]

export const statesData = [
    'All States',
    'Juba',
    'Awiel',
    'Malakal',
    'Wau',
    'Yambio',
    'Bentiu',
    'Kuajok',
    'Torit',
    'Bor',
    'Abiey',
    'Ruweng',
]

export const ageData = [
    '4 - 8',
    '9 - 13',
    '14 - 18',
    '19 - 23',
]

export const genderData = [
    'Either', 'male', 'femal'
]

export const childrenTestimonialsData = [
    {
        name:'Rio de Janeiro',
        title:'18-year-old street boy',
        text:`Give us the opportunity to change our story`
    },
    {
        name:'Zimbabwe Rio de Janeiro',
        title:'Street child in Harare',
        text:`Education is the key of life: if you do not have education, you are just like nothing
        `
    },
    {
        name:'Zimbabwe Rio de Janeiro',
        title:'Street child in Harare',
        text:`
            People speak badly of us,
            they blame us for everything, and call us wad-bi or drogue-gnoudba
        `
    },
    {
        name:'Rio de Janeiro',
        title:'18-year-old street boy',
        text:`I have been supporting my younger siblings who go to school, so if I should be removed from the street my siblings are going to lose their education`
    }
]

export const projectsData = [
    {
        title:'Back to School project',
        description:'We have a participatory approach, which respects diverse peoples and their cultures. Our priority is to ensure the protection of children and their welfare. We endeavour to act in the best way possible and we are committed to our Ethical Charter. Our projects to help children are regularly monitored by our teams and their financing is subject to independent and transparent inspection.',
        image:process.env.PUBLIC_URL+'./images/header-bg.jpeg'
    },
    {
        title:'Back to School project',
        description:'We have a participatory approach, which respects diverse peoples and their cultures. Our priority is to ensure the protection of children and their welfare. We endeavour to act in the best way possible and we are committed to our Ethical Charter. Our projects to help children are regularly monitored by our teams and their financing is subject to independent and transparent inspection.',
        image:process.env.PUBLIC_URL+'./images/WhatsApp Image 2023-03-30 at 2.28.27 PM.jpeg'
    },
    {
        title:'Back to School project',
        description:'We have a participatory approach, which respects diverse peoples and their cultures. Our priority is to ensure the protection of children and their welfare. We endeavour to act in the best way possible and we are committed to our Ethical Charter. Our projects to help children are regularly monitored by our teams and their financing is subject to independent and transparent inspection.',
        image:process.env.PUBLIC_URL+'./images/istockphoto-468578642-612x612.jpg'
    },
    {
        title:'Back to School project',
        description:'We have a participatory approach, which respects diverse peoples and their cultures. Our priority is to ensure the protection of children and their welfare. We endeavour to act in the best way possible and we are committed to our Ethical Charter. Our projects to help children are regularly monitored by our teams and their financing is subject to independent and transparent inspection.',
        image:process.env.PUBLIC_URL+'./images/header-bg.jpeg'
    },
]