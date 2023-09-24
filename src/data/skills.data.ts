import { IDictionary } from "../translator/dictionaries/interface";

export interface ISkillCard {
    name: string,
    translateID: keyof IDictionary,
    addition?: string[],
    img?: string
}

export const SkillsData: ISkillCard[] = [
    { name: 'JavaScript', translateID: 'SKILLS_JS' },
    {
        name: 'CSS/SCSS',
        translateID: 'SKILLS_CSS',
        addition: ['@keyframes animation', 'flex', 'transform animation']
    },
    { name: 'HTML', translateID: 'SKILLS_HTML' },
    { name: 'TypeScript', translateID: 'SKILLS_TS' },
    {
        name: 'React',
        translateID: 'SKILLS_React',
        addition: ['styled-component', 'MobX'],
    },
    {
        name: 'Angular',
        translateID: 'SKILLS_ANgular',
        addition: ['RxJS'],
    },
    {
        name: 'Addition',
        translateID: 'SKILLS_ADDITION',
        addition: ['SVG', 'Adobe Illustrator']
    },
    {
        name: 'Common',
        translateID: 'SKILLS_COMMON',
        addition: ['Git', 'GitHub', 'WebPack', 'npm']
    },
];