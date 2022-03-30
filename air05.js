#! node

// Script qui affiche une pyramide

// Gestion d'erreur
let arg = process.argv;
arg.splice(0, 2);

if (arg.length != 2) {
  console.log(
    "Veuillez indiquer deux arguments au script. Le premier étant un élément au choix pour construire la pyramide (symbole, chiffre, lettre) et le deuxième un nombre pour indiquer le nombres d'étage de la pyramide."
  );
  return;
}

// Parsing
let symbole = arg[0];
let stage = arg[1];
let i = 1;

// Function / Résolution du problème
const pyramide = (symbole, stage, i) => {
  if (stage === 0) {
    return;
  } else {
    console.log(" ".repeat(stage - 1) + symbole.repeat(i));
    let result = pyramide(symbole, stage - 1, i + 2);
    return result;
  }
};

// Affichage
pyramide(symbole, stage, i);
