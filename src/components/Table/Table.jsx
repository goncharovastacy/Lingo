import st from '../Table/Table.module.scss';
import words from './../../data/words.json';
import Row from '../Row/Row';

function Table() {

    return (
        <div className={st.table}>
            <div className='container'>
            <table>
                <thead>
                <tr>
                    <th>ENGLISH</th>
                    <th>TRANSCRIPTION</th>
                    <th>RUSSIAN</th>
                    <th>TAG</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th><input type="text" /></th>
                    <th><input type="text" /></th>
                    <th><input type="text" /></th>
                    <th><input type="text" /></th>
                    <th><button>Save</button></th>
                    <th><button>Cancel</button></th>
                </tr>
                {
                    words.map((word, i)=>(
                        <Row key={i} english={word.english} transcription={word.transcription}
                        russian={word.russian} tags={word.tags}></Row>
                    ))
                }
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Table;