import { useState } from "react";
import { observer, inject } from "mobx-react";
import editimg from "./../../assets/images/edit.svg";
import delet from "./../../assets/images/delete.svg";

function Row(props) {
  const { english, transcription, russian, tags, id, WordsStore } = props;
  const [edit, setEdit] = useState(false);
  const [editFields, setEditFields] = useState({
    english: english,
    transcription: transcription,
    russian: russian,
    tags: tags,
  });
  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleCancel = () => {
    setEdit(false);
    setEditFields({
      english: english,
      transcription: transcription,
      russian: russian,
      tags: tags,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "english" && /[\dА-Яа-я]/g.test(value)) {
      alert("В английском слове можно использовать только латинский алфавит");
    } else if (name === "russian" && /[\da-zA-Z]/g.test(value)) {
      alert("В переводе слова можно использовать только кириллицу");
    }
    setEditFields({ ...editFields, [name]: value });
  };

  const handleSave = async () => {
    if (
      editFields.english !== "" &&
      editFields.transcription !== "" &&
      editFields.russian !== "" &&
      editFields.tags !== ""
    ) {
      setEdit(false);
      await WordsStore.editWord({
        id: id,
        english: editFields.english,
        transcription: editFields.transcription,
        russian: editFields.russian,
        tags: editFields.tags,
      });
    }
  };

  const handleDelete = async () => {
    await WordsStore.deleteWord(id);
  };

  return (
    <tr>
      {edit ? (
        <>
          <th>
            <input
              type="text"
              value={editFields.english}
              onChange={handleChange}
              name="english"
              className={editFields.english !== "" ? "" : "error"}
            />
          </th>
          <th>
            <input
              type="text"
              value={editFields.transcription}
              onChange={handleChange}
              name="transcription"
              className={editFields.transcription !== "" ? "" : "error"}
            />
          </th>
          <th>
            <input
              type="text"
              value={editFields.russian}
              onChange={handleChange}
              name="russian"
              className={editFields.russian !== "" ? "" : "error"}
            />
          </th>
          <th>
            <input
              type="text"
              value={editFields.tags}
              onChange={handleChange}
              name="tags"
              className={editFields.tags !== "" ? "" : "error"}
            />
          </th>
          <th>
            <button
              onClick={handleSave}
              disabled={
                editFields.english === "" ||
                editFields.transcription === "" ||
                editFields.russian === "" ||
                editFields.tags === ""
                  ? true
                  : false
              }
            >
              Сохранить
            </button>
          </th>
          <th>
            <button onClick={handleCancel}>Отмена</button>
          </th>
        </>
      ) : (
        <>
          <th>{editFields.english}</th>
          <th>{editFields.transcription}</th>
          <th>{editFields.russian}</th>
          <th>{editFields.tags}</th>
          <th>
            <button>
              <img src={editimg} alt="Edit" onClick={handleEdit} />
            </button>
          </th>
          <th>
            <button>
              <img src={delet} alt="Delete" onClick={handleDelete} />
            </button>
          </th>
        </>
      )}
    </tr>
  );
}
export default inject("WordsStore")(observer(Row));
