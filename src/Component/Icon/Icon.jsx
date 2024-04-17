import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'
import './icon.css';

function Icon({name}) {
    if(name == "circle"){
        return <FaRegCircle className='icon circle'/>
    }
    else if(name == "cross"){
        return <FaTimes className='icon'/>
    }
    else{
        return <FaPen className='icon pen'/>
    }
}

export default Icon;