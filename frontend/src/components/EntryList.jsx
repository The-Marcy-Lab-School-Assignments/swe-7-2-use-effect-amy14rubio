import EntryCard from './EntryCard';

const EntryList = ({ entries, loadEntries }) => {
  return (
    <section>
      <h2>Past Entries</h2>
      <ul className='entry-list'>
        {entries.map((entry) => (
          <EntryCard
            key={entry.id}
            id={entry.id}
            title={entry.title}
            date={entry.date}
            mood={entry.mood}
            content={entry.content}
            loadEntries={loadEntries}
          />
        ))}
      </ul>
    </section>
  );
};

export default EntryList;
