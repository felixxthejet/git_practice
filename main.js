// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, dna) {
  return {
    specimenNum: num,
    dna: dna,
    mutate(){
      let randBase = returnRandBase();
      let randIndex = Math.floor(Math.random() * dna.length);
      let newDna = [];
      for (i = 0; i < dna.length; i++) {
        if (i !== randIndex){
          newDna.push(dna[i]);
        } else {
          while (dna[i] === randBase){
            randBase = returnRandBase();
          }
          newDna.push(randBase);
        }
        }
      this.dna = newDna;
    },
    compareDNA(paequor){
      let count = 0;
      for (i = 0; i < dna.length; i++){
        if (this.dna[i] === paequor.dna[i]){
          count ++;
        }
      };
      let percent = count / dna.length;
      console.log(`Species ${this.specimenNum} and ${paequor.specimenNum} has ${percent} of DNA in common.`);
    },
    willLikelySurvive(){
      let count = 0;
      for (let i = 0; i< dna.length; i++){
        if (this.dna[i] === 'C' || this.dna[i] === 'G'){
          count ++;
        }
      }
      return count / this.dna.length >= .6 ? true : false;
    },
  }
};



// let alphaDna = mockUpStrand();
// let betaDna = mockUpStrand()
// let alpha = pAequorFactory(1, alphaDna);
// let beta = pAequorFactory(2, betaDna);
// // alpha.compareDNA(beta);
// console.log(alphaDna);
// console.log(alpha.willLikelySurvive());

let dna30 = [];
for (i = 0; i <= 30; i++) {
  let dna = mockUpStrand();
  dna30.push(dna)
}
let pAequors = dna30.map(dna => pAequorFactory(dna30.indexOf(dna), dna));
console.log(pAequors);
