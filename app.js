const notes = require("./notes");
const chalk = require("chalk");

const log = console.log;

log(notes.getNotes());
log(chalk.green("Success!"));
log(chalk.green.inverse.bold("Success!"));
