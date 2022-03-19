import skateImg from '$lib/images/skate.svg';
import splitImg from '$lib/images/splitsmart.svg';
import provaImg from '$lib/images/prova.svg';
import thirteentImg from '$lib/images/thirteen.svg';
import type { ProjectInterface } from './interfaces';
export const projects: ProjectInterface[] = [
	{
		name: 'Skate Spot',
		description: 'Crowd-sourced social platform for everything skateboarding.',
		img: skateImg,
		caption: 'Skate by Angela Angelini from NounProject.com'
	},
	{
		name: 'Splitsmart',
		description: 'A social and easy way to split the bill.',
		img: splitImg,
		caption: 'Save Money by NAPISAH from NounProject.com'
	},
	{
		name: 'Prova',
		description: 'Track your runs to meet your goals.',
		img: provaImg,
		caption: 'Running by Dimiter Petrov from NounProject.com'
	},
	{
		name: 'Thirteen',
		description: 'A Southeastern Asian card game played between 2-4 players.',
		img: thirteentImg,
		caption: 'Cards by Made from NounProject.com'
	}
];
