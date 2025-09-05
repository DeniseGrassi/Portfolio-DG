export type Project = {
title: string
description: string
tags: string[]
image?: string
repo?: string
live?: string
}


export const projects: Project[] = [
{
title: 'WhatsUp (clone do Twitter)',
description: 'Autenticação, perfil, seguir/ser seguido, tweets/retweets/likes. React + TS no front, Django REST + PostgreSQL no back.',
tags: ['React', 'TypeScript', 'Django REST', 'PostgreSQL'],
repo: 'https://github.com/DeniseGrassi/whatsup',
live: 'https://whatsup.vercel.app/'
},
{
title: 'Bookstore (e‑commerce API)',
description: 'Django REST, JWT, PostgreSQL, Docker, CI/CD. Endpoints de produtos/pedidos/usuarios.',
tags: ['Django REST', 'PostgreSQL', 'Docker', 'CI/CD'],
repo: 'https://github.com/DeniseGrassi/bookstore'
},
{
title: 'eFood (front)',
description: 'React + Redux Toolkit, Styled Components e Vite; cards dinâmicos e UI responsiva.',
tags: ['React', 'Redux Toolkit', 'Vite'],
repo: 'https://github.com/DeniseGrassi/eFood',
live: 'https://efood-mvc6gyurr-denise-grassis-projects.vercel.app/'
}
]