import { Guid } from 'guid-typescript';
import { Bunny } from './bunny';

export const BUNNIES: Bunny[] = [
    {id: Guid.create(), name: 'Gus', description: 'Our brave little boy'},
    {id: Guid.create(), name: 'Priscilla', description: 'A very spooky bitch'}
];
