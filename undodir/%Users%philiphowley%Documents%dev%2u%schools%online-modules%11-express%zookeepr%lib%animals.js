Vim�UnDo� I5�V}��K�B�pK������^~j�8<|���   S   i    filteredResults = filteredResults.filter((animal) => animal.personalityTraits.indexOf(trait) !== -1);                              `9S�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `8*     �                   �               5�_�                    +       ����                                                                                                                                                                                                                                                                                                                                                             `8*     �   *              }5�_�                    ,        ����                                                                                                                                                                                                                                                                                                                                                             `8*     �   +               5�_�                    -        ����                                                                                                                                                                                                                                                                                                                                                             `8*      �   -            �   -            5�_�                    1       ����                                                                                                                                                                                                                                                                                                                                                             `8**     �   0              }5�_�                    2        ����                                                                                                                                                                                                                                                                                                                                                             `8**     �   1               5�_�                    3        ����                                                                                                                                                                                                                                                                                                                                                             `8*+     �   3            �   3            5�_�      	              3        ����                                                                                                                                                                                                                                                                                                                                                             `8*,     �   2   3           5�_�      
           	   ;       ����                                                                                                                                                                                                                                                                                                                                                             `8*:     �   :              }5�_�   	              
   <        ����                                                                                                                                                                                                                                                                                                                                                             `8*;     �   ;               5�_�   
                 =        ����                                                                                                                                                                                                                                                                                                                                                             `8*;     �   =            �   =            5�_�                    =        ����                                                                                                                                                                                                                                                                                                                                                             `8*=     �   <   =           5�_�                    J        ����                                                                                                                                                                                                                                                                                                                                                             `8*�    �       +   K   ,       .function filtersByQuery(query, animalsArray) {   "  let personalityTraitsArray = [];   %  let filteredResults = animalsArray;      if (query.personalityTraits) {   2    // Save personalityTraits as a dedicated array   J    // If peronalityTraits is a string, place it into a new array and save   6    if (typeof query.personalityTraits === "string") {   9      personalityTraitsArray = [query.personalityTraits];       } else {   7      personalityTraitsArray = query.personalityTraits;       }     }   <  // Loop through each trait in the personalityTraits array:   -  personalityTraitsArray.forEach((trait) => {   G    // Check the trait against each animal in the filteredResults array   ;    // Remember, it is initially a copy of the animalsArray   G    // but here we're updating it for each trait in the .forEach() loop   G    // For each trait being targeted by the filter, the filteredResults   G    // array will then contain only the entries that contain the trait,   G    // so at the end we'll have an array of animals that have every one   9    // of the traits when the .forEach() loop is finished   -    filteredResults = filteredResults.filter(   @      (animal) => animal.personalityTraits.indexOf(trait) !== -1       );     });     if (query.diet) {   -    filteredResults = filteredResults.filter(   ,      (animal) => animal.diet === query.diet       );     }     if (query.species) {   -    filteredResults = filteredResults.filter(   2      (animal) => animal.species === query.species       );     }     if (query.name) {   -    filteredResults = filteredResults.filter(   ,      (animal) => animal.name === query.name       );     }     return filteredResults;   }    5�_�                    5       ����                                                                                                                                                                                                                                                                                                                            1           9           V        `8+    �   4   6   I      0    path.join(__dirname, "./data/animals.json"),5�_�                            ����                                                                                                                                                                                                                                                                                                                            1           9           V        `8w�     �               I   .function filtersByQuery(query, animalsArray) {   "  let personalityTraitsArray = [];   %  let filteredResults = animalsArray;      if (query.personalityTraits) {   2    // Save personalityTraits as a dedicated array   J    // If peronalityTraits is a string, place it into a new array and save   6    if (typeof query.personalityTraits === "string") {   9      personalityTraitsArray = [query.personalityTraits];       } else {   7      personalityTraitsArray = query.personalityTraits;       }     }   <  // Loop through each trait in the personalityTraits array:   -  personalityTraitsArray.forEach((trait) => {   G    // Check the trait against each animal in the filteredResults array   ;    // Remember, it is initially a copy of the animalsArray   G    // but here we're updating it for each trait in the .forEach() loop   G    // For each trait being targeted by the filter, the filteredResults   G    // array will then contain only the entries that contain the trait,   G    // so at the end we'll have an array of animals that have every one   9    // of the traits when the .forEach() loop is finished   -    filteredResults = filteredResults.filter(   @      (animal) => animal.personalityTraits.indexOf(trait) !== -1       );     });     if (query.diet) {   -    filteredResults = filteredResults.filter(   ,      (animal) => animal.diet === query.diet       );     }     if (query.species) {   -    filteredResults = filteredResults.filter(   2      (animal) => animal.species === query.species       );     }     if (query.name) {   -    filteredResults = filteredResults.filter(   ,      (animal) => animal.name === query.name       );     }     return filteredResults;   }       %function findById(id, animalsArray) {   F  const result = animalsArray.filter((animal) => animal.id === id)[0];     return result;   }       .function createNewAnimal(body, animalsArray) {     const animal = body;     animalsArray.push(animal);     fs.writeFileSync(   1    path.join(__dirname, "../data/animals.json"),   6    JSON.stringify({ animals: animalsArray }, null, 2)     );     return animal;   }       !function validateAnimal(animal) {   8  if (!animal.name || typeof animal.name !== "string") {       return false;     }   >  if (!animal.species || typeof animal.species !== "string") {       return false;     }   8  if (!animal.diet || typeof animal.diet !== "string") {       return false;     }   N  if (!animal.personalityTraits || !Array.isArray(animal.personalityTraits)) {       return false;     }     return true;   }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `9S�     �         H      i    filteredResults = filteredResults.filter((animal) => animal.personalityTraits.indexOf(trait) !== -1);5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `9S�    �      5   H      k      filteredResults = filteredResults.filter((animal) => animal.personalityTraits.indexOf(trait) !== -1);     });     if (query.diet) {   U    filteredResults = filteredResults.filter((animal) => animal.diet === query.diet);     }     if (query.species) {   [    filteredResults = filteredResults.filter((animal) => animal.species === query.species);     }     if (query.name) {   U    filteredResults = filteredResults.filter((animal) => animal.name === query.name);     }     return filteredResults;   }       %function findById(id, animalsArray) {   F  const result = animalsArray.filter((animal) => animal.id === id)[0];     return result;   }       .function createNewAnimal(body, animalsArray) {     const animal = body;     animalsArray.push(animal);   u  fs.writeFileSync(path.join(__dirname, '../data/animals.json'), JSON.stringify({ animals: animalsArray }, null, 2));5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `9S�    �   M            �   L   N          };�   K   M            validateAnimal,�   J   L            createNewAnimal,�   I   K            findById,�   H   J            filtersByQuery,�   G   I          module.exports = {�   F   H           �   E   G          }�   D   F            return true;�   C   E            }�   B   D              return false;�   A   C          N  if (!animal.personalityTraits || !Array.isArray(animal.personalityTraits)) {�   @   B            }�   ?   A              return false;�   >   @          8  if (!animal.diet || typeof animal.diet !== 'string') {�   =   ?            }�   <   >              return false;�   ;   =          >  if (!animal.species || typeof animal.species !== 'string') {�   :   <            }�   9   ;              return false;�   8   :          8  if (!animal.name || typeof animal.name !== 'string') {�   7   9          !function validateAnimal(animal) {�   6   8           �   5   7          }�   4   6            return animal;�   3   5            );�   2   4          7    JSON.stringify({ animals: animalsArray }, null, 2),�   1   3          1    path.join(__dirname, '../data/animals.json'),�   0   2            fs.writeFileSync(�   /   1            animalsArray.push(animal);�   .   0            const animal = body;�   -   /          .function createNewAnimal(body, animalsArray) {�   ,   .           �   +   -          }�   *   ,            return result;�   )   +          F  const result = animalsArray.filter((animal) => animal.id === id)[0];�   (   *          %function findById(id, animalsArray) {�   '   )           �   &   (          }�   %   '            return filteredResults;�   $   &            }�   #   %          U    filteredResults = filteredResults.filter((animal) => animal.name === query.name);�   "   $            if (query.name) {�   !   #            }�       "          [    filteredResults = filteredResults.filter((animal) => animal.species === query.species);�      !            if (query.species) {�                   }�                U    filteredResults = filteredResults.filter((animal) => animal.diet === query.diet);�                  if (query.diet) {�                  });�                    );�                A      (animal) => animal.personalityTraits.indexOf(trait) !== -1,�                -    filteredResults = filteredResults.filter(�                9    // of the traits when the .forEach() loop is finished�                G    // so at the end we'll have an array of animals that have every one�                G    // array will then contain only the entries that contain the trait,�                G    // For each trait being targeted by the filter, the filteredResults�                G    // but here we're updating it for each trait in the .forEach() loop�                ;    // Remember, it is initially a copy of the animalsArray�                G    // Check the trait against each animal in the filteredResults array�                -  personalityTraitsArray.forEach((trait) => {�                <  // Loop through each trait in the personalityTraits array:�                  }�                    }�                7      personalityTraitsArray = query.personalityTraits;�                    } else {�   
             9      personalityTraitsArray = [query.personalityTraits];�   	             6    if (typeof query.personalityTraits === 'string') {�      
          J    // If peronalityTraits is a string, place it into a new array and save�      	          2    // Save personalityTraits as a dedicated array�                   if (query.personalityTraits) {�                %  let filteredResults = animalsArray;�                "  let personalityTraitsArray = [];�                .function filtersByQuery(query, animalsArray) {�                 �                const path = require('path');�                 const fs = require('fs');5��