import { deleteEntry } from '../fetch-helpers';

const EntryCard = ({ id, title, date, mood, content, loadEntries }) => {
  const handleDelete = async (e) => {
    const { error } = await deleteEntry(id);
    if (error) return console.error(error);
    await loadEntries();
  };

  return (
    <li className='entry-card'>
      <div className='entry-card-header'>
        <span className='entry-card-title'>{title}</span>
        <span className='entry-card-mood'>{mood}</span>
      </div>
      <p className='entry-card-meta'>{date}</p>
      <p className='entry-card-content'>{content}</p>
      <div className='entry-card-controls'>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default EntryCard;
