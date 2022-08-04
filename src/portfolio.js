const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://chanpi23.github.io/cleanfolio',
  title: 'CD',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Chandrika D',
  role: 'Full Stack Developer ',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://docs.google.com/document/d/e/2PACX-1vSS7wXhXkv42UPXC2aWF5E2qa3owA4PAtdwWx1vRwvWoIQsLPIDvGgYXFXl1ZRz5Oolk_CBbRIx5utl/pub',
  social: {
    linkedin: 'www.linkedin.com/in/chandrika-cd',
    github: 'https://github.com/Chanpi23',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Snake Game',
    description:
      'Throw back to the popular Nokia cellphone game from the late 90/s ',
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Chanpi23/snake-game-',
    livePreview: 'https://channycodez-snakegame.netlify.app',
  },
  {
    name: 'Gganbu',
    description:
      'In this game you are tasked with betting a number of marbles that your opponent can/t see. Your opponent will guess if the number of marbles you/ve chosen is odd or even. If the guess is correct, your opponent wins the marbles you bet. If the guess is not correct, you win the round! ',
    stack: ['HTML', 'JavaScript', 'CSS','Node/Express'],
    sourceCode: 'https://github.com/sharonmuwonge/Gganbu',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'MongoDB',
  'Node',
  'Git',
  'Jest',
  'Express'

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'channycodez@gmail.com',
}

export { header, about, projects, skills, contact }


