/*
* Array : [{ hauteur : 30, epaisseur: x}, { hauteur : 30, epaisseur: x}]
*/
function setBiblio(books){
// armoire fait 200 cm de haut
armoireHauteur = 200;
// armoire fait 100 cm de large
armoireLargeur = 100;
etagereRestant = armoireLargeur;
armoireRestant = armoireHauteur;
// Je créé ma bibliothèque
bibliotheque = [];
//Je créé mon armoire
bibliotheque.push([]);
indexArmoire = 0;
// Je créé ma première étagère
bibliotheque[indexArmoire].push([]);
indexEtagere = 0;

//Pour chaque livre que je reçois
books.forEach((book)=>{
    // Si il NE reste PAS de place dans l'étagère courante
    if(etagereRestant < book.epaisseur) {
       //   Si il NE reste PAS de place de l'armoire courante  
       if(armoireRestant < 30){
      //       Je créé une armoire dans ma bibliothèque et je met à jour les variables qui y font references
         bibliotheque.push([]);
         indexArmoire++;
         armoireRestant = armoireHauteur;
       }
        //Je créé une étagère et je met à jour les variables qui y font references
        bibliotheque[indexArmoire].push([]);
        indexEtagere =0;
        armoireRestant -= 30;
       etagereRestant = armoireLargeur;
    }
    bibliotheque[indexArmoire][indexEtagere].push(book);
   etagereRestant -= book.epaisseur;
});
//Je renvois ma bibliothèque
return bibliotheque;
}