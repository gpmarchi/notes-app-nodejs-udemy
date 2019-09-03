const fs = require("fs");
const chalk = require("chalk");

const log = console.log;

const readNote = title => {
  const notes = loadNotes();

  const note = notes.find(note => note.title === title);

  if (note) {
    log(chalk.blue(note.title + ": ") + note.body);
  } else {
    log(chalk.red.inverse("Note does not exist"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();

  if (doesNoteWithTitleExists(notes, title)) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    log(chalk.green.inverse("New note added!"));
  } else {
    log(chalk.red.inverse("Note already exists!"));
  }
};

const removeNote = title => {
  const notes = loadNotes();

  if (!doesNoteWithTitleExists(notes, title)) {
    notesToKeep = notes.filter(note => note.title !== title);
    saveNotes(notesToKeep);
    log(chalk.green.inverse(`Note with title \"${title}\" removed.`));
  } else {
    log(chalk.red.inverse("Note does not exists!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  log(chalk.blue("Your notes"));

  notes.forEach(note => {
    log(note.title);
  });
};

const saveNotes = notes => {
  const jsonData = JSON.stringify(notes);
  fs.writeFileSync("./data/notes.json", jsonData);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("./data/notes.json");
    const jsonData = dataBuffer.toString();
    return JSON.parse(jsonData);
  } catch (error) {
    return [];
  }
};

const doesNoteWithTitleExists = (notes, title) => {
  const alreadyExistingNotes = notes.find(note => note.title === title);
  if (!alreadyExistingNotes) {
    return true;
  }
  return false;
};

module.exports = {
  readNote: readNote,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
};
