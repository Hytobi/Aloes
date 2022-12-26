const app = document.getElementById("app");
const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("input", () => {
    // Obtenir le texte saisi par l'utilisateur
    const text = input.value;

    // Initialiser le résultat à une chaîne vide
    let result = "";


    // Pour chaque ligne du texte saisi, ajouter le code HTML
    // correspondant à la couleur de la méthode Aloès
    text.split("\n").forEach(line => {

        let i = 0; // Initialiser le compteur de la boucle while

        // Tant que le compteur est inférieur à la longueur de la ligne
        while (i < line.length) {

            // Obtenir le caractère à l'index i et init
            const c = line[i];
            let color;
            let nbInter = 1;

            // Déterminer le son commencant par le caractère c
            if (c === "o" && line[i + 1] === "i") {
                // -oi
                color = "purple";
            } else if (c === "o" && line[i + 1] === "u") {
                // -ou
                color = "orange";
            } else if (c === "e" && (line[i + 1] === "r" || line[i + 1] === "z" || line[i + 1] === "i") && line[i + 2] === " ") {
                // -er -ez -ei
                color = "green";
            } else if (line[i - 1] === " " && c === "e" && (line[i + 1] === "s" || line[i + 1] === "t") && line[i + 2] === " ") {
                // es
                color = "green";
            } else if (line[i - 1] === " " && c === "e" && line[i + 1] === "s" && line[i + 2] === "t" && line[i + 3] === " ") {
                // est
                nbInter++;
                color = "green";
            } else if (line[i - 1] === " " && c === "e" && line[i + 1] === "s") {
                // es-
                color = "green";
                nbInter--;
            } else if (line[i - 1] === "t" && c === "e" && line[i + 1] === "s") {
                color = "green";
                nbInter--;

            } else if (c === "e" && line[i + 1] === "u") {
                // -eu
                color = "pink";
                if (line[i + 2] === "x") {
                    // -eux
                    nbInter++;
                }
            } else if (c === "é" && line[i + 1] === "e") {
                // -ée
                color = "green";
            } else if (c === "e" && line[i + 1] === "a" && line[i + 2] === "u") {
                // -eau
                nbInter++;
                color = "blue";
                if (line[i + 3] === "x") {
                    // -eaux
                    nbInter++;
                }
            } else if (c === "e" && line[i + 1] === "-") {
                // e muet
                nbInter--;
                i++;
                color = "black";
            } else if (c === "a" && line[i + 1] === "i") {
                // -ai
                color = "green";
                if (line[i + 2] === "s" || line[i + 2] === "t") {
                    // -ais -ait
                    nbInter++;
                }
            } else if (c === "a" && line[i + 1] === "u") {
                // -au
                color = "blue";
                if (line[i + 2] === "x") {
                    // -aux
                    nbInter++;
                }
            } else {
                nbInter--;
                switch (c.toLowerCase()) {
                    case "a":
                    case "â":
                    case "à":
                        color = "red";
                        break;
                    case "u":
                        color = "brown";
                        break;
                    case "e":
                        color = "pink";
                        break;
                    case "é":
                    case "è":
                    case "ê":
                        color = "green";
                        break;
                    case "i":
                    case "î":
                    case "ï":
                        color = "yellow";
                        break;
                    case "o":
                    case "ô":
                    case "ö":
                        color = "blue";
                        break;

                    default:
                        color = "black";
                        break;
                }
            }

            if (nbInter === 0) {
                result += `<span class="${color}">${c}</span>`;
            } else if (nbInter === 1) {
                result += `<span class="${color}">${c}${line[i + 1]}</span>`;
            } else if (nbInter === 2) {
                result += `<span class="${color}">${c}${line[i + 1]}${line[i + 2]}</span>`;
            } else if (nbInter === 3) {
                result += `<span class="${color}">${c}${line[i + 1]}${line[i + 2]}${line[i + 3]}</span>`;
            }
            i += (nbInter + 1); // Incrémenter le compteur de la boucle while
        }
        result += "<br>"; // Ajouter un retour à la ligne à la fin de chaque ligne
    });

    // Mettre à jour le contenu de l'élément de sortie avec le résultat
    output.innerHTML = result;
});