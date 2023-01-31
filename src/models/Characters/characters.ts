import { Advisor } from '../advisor-class/Advisor';
import { Fighter } from '../fighter-class/Fighter';
import { King } from '../king-class/King';
import { Squire } from '../squire-class/Squire';

const joffrey = new King('Joffrey', 'Baratheon', 12, 3);
const jamie = new Fighter('Jamie', 'Lannister', 35, 'sword', 7);
const daenerys = new Fighter('Daenerys', 'Targaryen', 18, 'dragon', 6);
const tyrion = new Advisor('Tyrion', 'Lannister', 40, daenerys);
const bronn = new Squire('Bronn', 'Darkwaters', 32, 1, jamie);


const characters = [joffrey, jamie, daenerys, tyrion, bronn];