const notes = [
  {
    id: 1,
    subject: "Git Hub",
    date: "11/15/2021",
    feeling: "Sad",
    timeSpent: 360,
  },
  {
    id: 2,
    subject: "Flex Box",
    date: "11/11/2021",
    feeling: "Confused",
    timeSpent: 420,
  },
];

const noteAboutToday = {
  id: 3,
  subject: "Arrays",
  date: "11/17/2021",
  feeling: "Hungry",
  timeSpent: 180,
};

notes.push(noteAboutToday);

// Note 1
// 2/14/2021
// I learned JavaScript Objects.
// I spent 124 minutes working on it
// I felt frustrated.
//
//* Bk2 Ch7
//
// for (const noted of notes) {
//   console.log(`
//     Note ${noted.id}
//     ${noted.date}
//     I learned ${noted.subject}.
//     I spent ${noted.timeSpent} minutes working on it
//     I felt ${noted.feeling}.
//     `);
// }
//
//
//* Bk2 Ch8

// const searchTerm = "Git Hub"

// for (const note of notes) {
//     if (note.subject === searchTerm)
//     {
//         console.log(`
//         Note ${note.id}
//         ${note.date}
//         I learned ${note.subject}.
//         I spent ${note.timeSpent} minutes working on it
//         I felt ${note.feeling}.
//         `)
//     }
// }
//
//* Bk2 Ch10
//
//
const createNote = (noteObject) => {
  const lastIndex = notes.length - 1;
  const currentLastNote = notes[lastIndex];
  const maxId = currentLastNote.id;
  const idForNewNote = maxId + 1;
  noteObject.id = idForNewNote;
  notes.push(noteObject);
};

const moreNewerNote = {
  subject: "Functions",
  date: "11/18/2021",
  feeling: "Something",
  timeSpent: 220,
};

createNote(moreNewerNote);

for (const noted of notes) {
  console.log(`
    Note ${noted.id}
    ${noted.date}
    I learned ${noted.subject}.
    I spent ${noted.timeSpent} minutes working on it
    I felt ${noted.feeling}.
    `);
}
