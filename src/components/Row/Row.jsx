import editimg from './../../assets/images/edit.svg';
import delet from './../../assets/images/delete.svg';
import { useState } from 'react';

function Row(props) {
    const { english, transcription, russian, tags } = props;
    const [ edit, setEdit ] = useState(false);
    const [ editEnglish, setEnglish ] = useState(english);
    const [ editTranscription, setTranscription ] = useState(transcription);
    const [ editRussian, setRussian ] = useState(russian);
    const [ editTags, setTags ] = useState(tags);
    const handleEdit = () => {
        setEdit(!edit);
    }

    const handleCancel = () => {
        setEdit(false);
        setEnglish(english);
        setTranscription(transcription);
        setRussian(russian);
        setTags(tags);
    }

    const handleChangeEnglish = (event) => {
        setEnglish(event.target.value);
    }

    const handleChangeTranscription = (event) => {
        setTranscription(event.target.value);
    }

    const handleChangeRussian = (event) => {
        setRussian(event.target.value);
    }

    const handleChangeTags = (event) => {
        setTags(event.target.value);
    }
    
    return ( 
        <tr>
            <th>{edit ? <input type="text" placeholder={editEnglish} 
            onChange={handleChangeEnglish}/> : editEnglish}</th>
            <th>{edit ? <input type="text" placeholder={editTranscription} 
            onChange={handleChangeTranscription}/> : editTranscription}</th>
            <th>{edit ? <input type="text" placeholder={editRussian} 
            onChange={handleChangeRussian}/> : editRussian}</th>
            <th>{edit ? <input type="text" placeholder={editTags} 
            onChange={handleChangeTags}/> : editTags}</th>
            <th>{edit ? <button>Save</button> : <button><img src={editimg} alt="Edit" onClick={handleEdit}/></button>}</th>
            <th>{edit ? <button onClick={handleCancel}>Cancel</button> : <button><img src={delet} alt="Delete" /></button> }</th>
        </tr>
     );
}
export default Row;