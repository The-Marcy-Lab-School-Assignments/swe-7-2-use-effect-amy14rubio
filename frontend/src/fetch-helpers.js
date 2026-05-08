const handleFetch = async (endpoint, config = {}) => {
  try {
    const res = await fetch(endpoint, config);
    const data = await res.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

// Fetches all journal entries from GET /api/entries.
// Returns { data, error } — data is an array of entry objects, error is null on success.
export const fetchEntries = async () => await handleFetch('/api/entries');

// Creates a new entry via POST /api/entries.
// entryData should be an object: { title, date, mood, content }
// Returns { data, error } — data is the newly created entry object.
export const createEntry = async (title, date, mood, content) => {
  return await handleFetch('/api/entries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, date, mood, content }),
  });
};

// Deletes an entry via DELETE /api/entries/:id.
// Returns { data, error } — data is the deleted entry object.
export const deleteEntry = async (id) => {
  return await handleFetch(`/api/entries/${id}`, {
    method: 'DELETE',
  });
};
