let input: string;
input = `"hello!`;

console.log(input, typeof input);
let parsed = JSONParser(input);
console.log(parsed, typeof parsed);

function JSONParser(string: any) {
  if ((string[0] = '"')) return string.slice(1, string.length - 1);

  if (string.match(/^[0-9]/)) return Number(string);

  if (string === "true") return true;
  if (string === "false") return false;

  if (string === "null") return null;
  if (string[0] === "{" || string[0] === "[") return partitionData(string);

  throw new Error();
}

function partitionData(string: string) {
  const bracketDict = { "[": "]", "{": "}" };
  const bracketStack = [];
  const chunks = [];



  
}
