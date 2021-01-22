const notesControllers = {};
const notesModel = require('../Models/notes.mo');

notesControllers.getNotes = async (req, res) => {
  const notes = await notesModel.find();
  res.json(notes);
};

notesControllers.createNotes = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new notesModel({
    title: title,
    content: content,
    date: date,
    author: author,
  });
  await newNote.save();
  res.json({ message: 'Note correctly created' });
};

notesControllers.getNote = async (req, res) => {
  const note = await notesModel.findById(req.params.id);
  res.json(note);
};

notesControllers.updateNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  await notesModel.findOneAndUpdate(req.params.id, {
    title,
    content,
    author,
  });
  res.json({ message: 'Note Updated' });
};

notesControllers.deleteNote = async (req, res) => {
  await notesModel.findOneAndDelete(req.params.id);
  res.json({ message: 'Note Deleted' });
};

module.exports = notesControllers;
