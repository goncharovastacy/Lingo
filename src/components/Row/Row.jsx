import edit from './../../assets/images/edit.svg';
import delet from './../../assets/images/delete.svg';

function Row(props) {
    const { english, transcription, russian, tags, isEdit } = props;
    return ( 
        <tr>
            <th>{isEdit ? <input type="text" placeholder={english}/> : english}</th>
            <th>{isEdit ? <input type="text" placeholder={transcription}/> : transcription}</th>
            <th>{isEdit ? <input type="text" placeholder={russian}/> : russian}</th>
            <th>{isEdit ? <input type="text" placeholder={tags}/> : tags}</th>
            <th>{isEdit ? <button>Save</button> : <button><img src={edit} alt="Edit" /></button>}</th>
            <th>{isEdit ? <button>Cancel</button> : <button><img src={delet} alt="Delete" /></button> }</th>
        </tr>
     );
}
export default Row;