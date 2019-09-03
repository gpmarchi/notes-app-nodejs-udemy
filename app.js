const yargs = require("yargs");
const notes = require("./src/notes");

const log = console.log;

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title to add",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note content body to add",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => notes.addNote(argv.title, argv.body)
});

yargs.command({
  command: "remove",
  describe: "Removes an existing note",
  builder: {
    title: {
      describe: "Note title to remove",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => notes.removeNote(argv.title)
});

yargs.command({
  command: "list",
  describe: "List all added notes",
  handler: () => notes.listNotes()
});

yargs.command({
  command: "read",
  describe: "Read a particular note",
  builder: {
    title: {
      describe: "Note title to read",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => notes.readNote(argv.title)
});

yargs.parse();
