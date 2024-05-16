import edusityImg from './assets/edusity.png'

const companies = [
    {
      name: 'Microsoft',
      experience:
        'I worked at Microsoft from 2018-2020 as a Software Engineer. I contributed to several projects, including the development of a new cloud-based platform for data analysis.',
    },
    {
      name: 'Google',
      experience:
        'I worked at Google from 2020-2022 as a Senior Software Engineer. I led a team of engineers to develop a new machine learning platform for natural language processing.',
    },
    // Add more companies here
  ];

  const projectDetails =[
    {
      title: 'YelpCamp',
      description: 'A Travel Agency Website made using MERN Stack.',
      imagePath: edusityImg,
      projectLink: 'https://github.com/awsvishwas/my-mern-project'
    },
    {
      title: 'Edusity',
      description: 'A University Frontend Website using React js.',
      imagePath: edusityImg,
      projectLink: 'https://github.com/awsvishwas/edusity-frontend-website'
       },
    {
      title: 'Serverless with AWS',
      description: 'A Live Visitor Counter Application hosted using AWS S3, Lambda, API Gateway & DynamoDb',
      imagePath: edusityImg,
      projectLink: 'https://github.com/awsvishwas/all-aws-repo/tree/main/MyAPI-Project'
    },

  ]

  export {companies, projectDetails}