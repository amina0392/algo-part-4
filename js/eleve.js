class Eleve {
    constructor (nom, prenom, classe) {
     this.name = nom;
     this.firstname = prenom;
     this.cours = classe;
     this.notes = {maths: [], algorithmique: [], javascript: []};
    } 
    bonjour() {
        console.log(`Je suis ${this.firstname}, en classe ${this.cours}`); 
    }
    ajoutNoteAlgo(n) {
        this.notes.algorithmique.push(n);
    }   
    ajoutNoteMaths(n) {
        this.notes.maths.push(n);
    }
    ajoutNotesJavascript(n) {
        this.notes.javascript.push(n);
    }
}




