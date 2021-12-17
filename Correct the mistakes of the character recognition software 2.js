const corrections = {
  '5': 'S',
  '0': 'O',
  '1': 'I',
};

const correct = string => (
  string.replace(/[501]/g, character => corrections[character])
);

function correct(string) {
    return string.replace(/0/g, "O")
                 .replace(/5/g, "S")
                 .replace(/1/g, "I");
}