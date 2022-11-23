const firstReponseJSON = `{
  "name" : "Yojimbo",
  "type" : "Film",
  "annotations" : [
    "Drame",
    "Thriller"
  ],
  "realisateur" : "Akira Kurosawa"
}`;

const firstObject = JSON.parse(firstReponseJSON);
// console.log(firstObject);

const secondReponseJSON = `{
  "name" : "Yojimbo",
  "type" : "Film",
  "annotations" : [
    "Drame",
    "Thriller"
  ],
  "realisateur" : "Akira Kurosawa",
  "date":"1961-09-13T12:00:00.000Z"
}`;

function dateReviver(key, value) {
  // If the value is a string and if it roughly looks like it could be a
  // JSON-style date string go ahead and try to parse it as a Date object.
  if ('string' === typeof value && /^\d{4}-[01]\d-[0-3]\dT[012]\d(?::[0-6]\d){2}\.\d{3}Z$/.test(value)) {
    var date = new Date(value);
    // If the date is valid then go ahead and return the date object.
    if (+date === +date) {
      return date;
    }
  }
  // If a date was not returned, return the value that was passed in.
  return value;
}

const secondObject = JSON.parse(secondReponseJSON, dateReviver);
console.log(secondObject);
console.log(secondObject.date.getDate());
