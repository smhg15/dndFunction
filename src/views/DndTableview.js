import { DndTable } from '../components/dndTable/DndTable';
import {players} from '../data/dataTable';

export default function DndTableview(data) { 
    return(
        <DndTable data={players}/>)} //"data" must receive an array of objects with at least one attribute named "id"
