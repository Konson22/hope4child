

export const navigationsLinksData = [
    {text:'HOME', path:'/'},
    {text:'WHO ARE WE', path:'/how-to-help', subLinks:[
        {text:'About us', path:'donate'},
        {text:'Projects', path:'/our-projects'},
        {text:'Support & Partners', path:'donate'},
        {text:'Our Team', path:'donate'},
        {text:'Legal Structure', path:'donate'},
        {text:'Anual Report', path:'donate'},
    ]},
    {text:'GET INVOLVED', path:'/children', 
        subLinks:[
            {text:'Sponsor Child', path:'/sponsor-child'},
            {text:'Make donation', path:'/donate'},
            {text:'Become a member', path:'/become-a-member'},
            {text:'Volunteer', path:'/volunteer'},
            {text:'Internship', path:'/internship'},
            {text:'Jobs', path:'/jobs'},
            {text:'News latter', path:'/'},
        ],
    },
    {text:'SPONSOR CHILD', path:'/sponsor-child'},
    {text:'GIVE GIFT', path:'/'},
]

export const childrenData = [
    {
        id:'2sa',
        name:'Kon Akech',
        gender:'male',
        age:14,
        avatar:process.env.PUBLIC_URL+'./images/avatars/image-1.png'
    },
    {
        id:'2edsa',
        name:'James John',
        gender:'male',
        age:14,
        avatar:process.env.PUBLIC_URL+'./images/avatars/image-2.png'
    },
    {
        id:'2sdsa',
        name:'Suzan Malik',
        gender:'male',
        age:14,
        avatar:process.env.PUBLIC_URL+'./images/avatars/image-3.png'
    },
    {
        id:'2sa',
        name:'Kon Akech',
        gender:'male',
        age:14,
        avatar:process.env.PUBLIC_URL+'./images/avatars/image-4.png'
    },
    {
        id:'2edsa',
        name:'James John',
        gender:'male',
        age:14,
        avatar:process.env.PUBLIC_URL+'./images/avatars/image-5.png'
    },
    {
        id:'2sdsa',
        name:'Suzan Malik',
        gender:'male',
        age:14,
        avatar:process.env.PUBLIC_URL+'./images/avatars/image-6.png'
    },
]

export const statesData = [
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