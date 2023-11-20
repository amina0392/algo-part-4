class Eleve {
    constructor (nom, prenom, classe) {
     this.name = nom;
     this.firstname = prenom;
     this.cours = classe;
     this.notes = {maths: [], algorithmique: [], javascript: []};
     
    } 
    
    monPrenom() {
      console.log(`Bonjour, mon prenom est ${this.firstname}`);
    } 
    maFormation() {
        console.log(`Marie est en formation ${this.cours}`);
    }
    marieNotes() {   
       this.notes.maths.push(12);
       console.log(`La note de maths de Marie est de ${this.notes.maths}`);
    }
    jonhNotes () {
      this.notes.maths.push(14);
      console.log(`La note de maths de John est de ${this.notes.maths}`);
    }
}
let pierre = new Eleve("Dupont", "Pierre", "Kercode");
let marie = new Eleve("Fontaine", "Marie", "CDA");
let jonh = new Eleve("Hunter", "Jonh", "CDUI");


pierre.monPrenom();
marie.maFormation();
marie.marieNotes();
jonh.jonhNotes();



    




