const RNA_MAP: {[props:string]:string} = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
} as const;

class Transcriptor {

  toRna(dna:string) {
    return dna.split("").map(d => { 
        const rna = RNA_MAP[d]
        if (rna === undefined) throw "Invalid input DNA."
        return rna
    }).join("")
  }
}

export default Transcriptor
