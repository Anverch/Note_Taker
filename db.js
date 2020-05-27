const fs = require("fs");

module.exports = function () {
    const pathToDB = "./db/db.json";

    return {
        /**
         * Gets all notes from database.
         * @returns JSON array of all notes.
         */
        getNotes : () => {
            return JSON.parse(fs.readFileSync(pathToDB, "utf8"));
        },

         /**
         * Saves notes to the database.
         * @param {Array} notes the notes to save.
         */
        saveNotes : (notes) => {
            fs.writeFileSync(pathToDB, JSON.stringify(notes), "utf8");
        }
    }
}
