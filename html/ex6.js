const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];


const dictElement = document.createElement("dl");


for(const word of words){
    const dictTerm = document.createElement("dt");
    dictTerm.textContent = word.term;
    dictElement.appendChild(dictTerm).style.fontWeight = "bold";

    const dictDefinition = document.createElement("dd");
    dictDefinition.textContent = word.definition; 
    dictElement.appendChild(dictDefinition);
}
document.getElementById("content").appendChild(dictElement);