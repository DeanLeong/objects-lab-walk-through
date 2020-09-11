// Movie Database

const blade = {
  title: 'Blade',
  director: 'Stephen Norrington',
  actors: ['Wesley Snipes', 'Stephen Dorff', 'Kris Kristofferson'],
  releaseYear: 1998,
  duration: 120,
};

const title = blade.title
// console.log(title)

const directorName = blade.director
// console.log(directorName)

const year = blade.releaseYear
// console.log(year)

blade.directorCut = blade.duration + 25
// console.log(blade)

// Hammond Mines Part 1

const snakewaterMontana = {
  paleontologist: 'Dr. Alan Grant',
  depth: '10 meters',
  specimen: 'Velociraptor',
};

// 1.
const guestOfHonor = snakewaterMontana.paleontologist
// console.log(guestOfHonor)

// 2.
const cleverGirl = snakewaterMontana.specimen
// console.log(cleverGirl)


// Part 2
const nicaragua = {
  depth: '200 meters',
  annualBudget: 1500000,
  specimens: [
    'Tyrannosaurus Rex',
    'Stegosaurous',
    'Triceratops',
    'Velociraptor',
  ],
};

// 1.
const nicaraguanSpecimens = nicaragua.specimens
// console.log(nicaraguanSpecimens)

// 2.
const favoriteSpecimen = nicaragua.specimens[1]
// console.log(favoriteSpecimen)

// 3.
const nicaraguaBudget = nicaragua.annualBudget += 250000
// console.log(nicaraguaBudget)

// Part 3

const hammondsMines = {
  buenosAires: {
    depth: '400 meters',
    annualBudget: 1000000,
    specimens: ['Dilophosaurus', 'Brachiosaurus'],
  },
  mexico: {
    depth: '350 meters',
    annualBudget: 900000,
    specimens: ['Gallimimus', 'Parasaurolophus'],
  },
};

// 1.
const mexicoDepth = hammondsMines.mexico.depth
// console.log(mexicoDepth)

// 2.
const buenosAiresAnnualBudget = hammondsMines.buenosAires.annualBudget
// console.log(buenosAiresAnnualBudget)

// 3.
const buenosAiresSpecimens = hammondsMines.buenosAires.specimens
// console.log(buenosAiresSpecimens)

// 4.
hammondsMines.nicaragua = nicaragua
// console.log(hammondsMines)

// 5. All Budgets
const nicBudget = hammondsMines.nicaragua.annualBudget
// console.log(nicBudget)
const buenosBudget = hammondsMines.buenosAires.annualBudget
// console.log(buenosBudget)
const mexicoBudget = hammondsMines.mexico.annualBudget
// console.log(mexicoBudget)

// 6.
const totalBudget = nicBudget + buenosBudget + mexicoBudget
// console.log(totalBudget)

// 7.
const parasaurolophus = hammondsMines.mexico.specimens[1]
// console.log(parasaurolophus)

// 8. obj.hasOwnProperty(prop)
const doesItExist = hammondsMines.hasOwnProperty('mexico')
// console.log(doesItExist)

// 9.
for (let key in hammondsMines) {
  // console.log(hammondsMines[key].depth)
}

// 10.
const totalAnnualBudget = () => {
  let total = 0
  for (let key in hammondsMines) {
    total += hammondsMines[key].annualBudget
  }
  console.log(total)
}

totalAnnualBudget()
