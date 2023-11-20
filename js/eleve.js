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
        console.log(`Bonjour, je suis en formation ${this.cours}`);
    }
}
let pierre = new Eleve("Dupont", "Pierre", "Kercode");
let marie = new Eleve("Fontaine", "Marie", "CDA");
let jonh = new Eleve("Hunter", "Jonh", "CDUI");

pierre.monPrenom();
marie.maFormation();
    




