export type Category = 'Todos' | 'Front-end' | 'Back-end' | 'Ferramentas';

export const navigationLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre Mim' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos & Tech' },
  { href: '#contato', label: 'Contato' },
];

export const metrics = [
  { value: '19', label: 'Anos de idade' },
  { value: '100%', label: 'Foco e dedicação' },
  { value: '5+', label: 'Tecnologias principais' },
];

export const aboutInfo = [
  { icon: '⌖', label: 'Naturalidade', value: 'Quissamã - RJ' },
  { icon: '⌂', label: 'Residência', value: 'Ilha do Governador - RJ' },
  { icon: '</>', label: 'Área de Atuação', value: 'Desenvolvimento Web Full Stack' },
  { icon: '▣', label: 'Formação', value: 'Ensino Médio completo · Estudos contínuos em TI' },
];

export const timeline = [
  { role: 'Jovem Aprendiz Operacional', icon: '▣', desc: 'Atuação em rotinas operacionais, organização de processos e apoio direto à equipe, sempre com foco em eficiência e responsabilidade.' },
  { role: 'Suporte Administrativo', icon: '▤', desc: 'Apoio em atividades administrativas, controle de documentos e atendimento interno, desenvolvendo organização e comunicação.' },
];

export const strengths = ['Organização', 'Proatividade', 'Comunicação Assertiva', 'Trabalho em Equipe', 'Aprendizado Rápido'];
export const hobbies = ['Videogames', 'Futebol', 'Basquete', 'Praia', 'Mecânica'];

export const filters: Category[] = ['Todos', 'Front-end', 'Back-end', 'Ferramentas'];

export const techs = [
  { name: 'HTML & CSS', category: 'Front-end' as Category },
  { name: 'JavaScript', category: 'Front-end' as Category },
  { name: 'Angular', category: 'Front-end' as Category },
  { name: 'Node.js', category: 'Back-end' as Category, },
  { name: 'Git & GitHub', category: 'Ferramentas' as Category },
  { name: 'VS Code', category: 'Ferramentas' as Category },
];

export const projects = [
  { title: '', category: 'Front-end' as Category, desc: ``, tags: ['Angular', 'CSS', 'TypeScript'], link: 'https://github.com/Joaqxz' },
  { title: '', category: 'Back-end' as Category, desc: '', tags: ['Node.js', 'REST', 'SQL'], link: 'https://github.com/Joaqxz' },
  { title: '', category: '' as Category, desc: '', tags: ['Git', 'Automação'], link: 'https://github.com/Joaqxz' },
];

export const socials = [
  { icon: '@', label: 'E-mail', value: 'joaquimalmeida2727@gmail.com', href: 'mailto:joaquimalmeida2727@gmail.com' },
  { icon: 'in', label: 'LinkedIn', value: '/in/-joaquimal', href: 'https://linkedin.com/in/-joaquimal' },
  { icon: 'GH', label: 'GitHub', value: 'JoaquimAl-Prog', href: 'https://github.com/Joaqxz' },
];