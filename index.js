const app = "I don't do much."
let kittens = ['Milo', 'Otis', 'Garfield']


function destructivelyAppendKitten (name) {
  //appends a kitten to the end of the kittens array.
  kittens.push ();
}
function destructivelyPrependKitten (name) {
  //prepends a kittend to the beginning of the kittens array.
  kittens.unshift();
}

function destructivelyRemoveLastKitten () {
  //removes the last kitten from the kittens array.
  kittens.pop ();
}

function destructivelyRemoveFirstKitten () {
  //removes the first kitten from the kittens array.
kittens.shift ();
}

function appendKitten () {
  //appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged.
  kittens.push (); 
}

function removeLastKitten () {
  //removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged.
  kittens.pop ();
}
function removeFirstKitten () {
  kittens.shift ();
}

