const houses = [
    {id: 1,
    pand: "huis",
    prijs: 350.000,
    oppervlak: 200,
    stad: "Brussel",
    kamers: 2,
    tuin: true},

    {id: 2,
    pand: "appartement",
    prijs: 150.000,
    oppervlak: 100,
    stad: "Gent",
    kamers: 1,
    tuin: false},
    
    {id: 3,
    pand: "huis",
    prijs: 700.000,
    oppervlak: 500,
    stad: "Antwerpen",
    kamers: 4,
    tuin: true},

    {id: 4,
    pand: "appartement",
    prijs: 300.000,
    oppervlak: 150,
    stad: "Gent",
    kamers: 3,
    tuin: false},

    {id: 5,
    pand: "huis",
    prijs: 500.000,
    oppervlak: 350,
    stad: "Brussel",
    kamers: 4,
    tuin: false},

    {id: 6,
    pand: "appartement",
    prijs: 250.000,
    oppervlak: 100,
    stad: "Brussel",
    kamers: 1,
    tuin: true},


    {id: 7,
    pand: "huis",
    prijs: 375.000,
    oppervlak: 300,
    stad: "Antwerpen",
    kamers: 2,
    tuin: true},

    {id: 8,
    pand: "appartement",
    prijs: 400.000,
    oppervlak: 250,
    stad: "Antwerpen",
    kamers: 3,
    tuin: false},

    {id: 9,
    pand: "huis",
    prijs: 150.000,
    oppervlak: 100,
    stad: "Brussel",
    kamers: 1,
    tuin: false},

    {id: 10,
    pand: "appartement",
    prijs: 330.000,
    oppervlak: 240,
    stad: "Gent",
    kamers: 2,
    tuin: true},

    {id: 11,
    pand: "appartement",
    prijs: 310.000,
    oppervlak: 200,
    stad: "Brussel",
    kamers: 3,
    tuin: false},
 
    {id: 12,
    pand: "huis",
    prijs: 250.000,
    oppervlak: 150,
    stad: "Antwerpen",
    kamers: 2,
    tuin: true},

    {id: 13,
    pand: "huis",
    prijs: 500.000,
    oppervlak: 400,
    stad: "Brussel",
    kamers: 5,
    tuin: true},
    
    {id: 14,
    pand: "appartement",
    prijs: 100.000,
    oppervlak: 100,
    stad: "Brussel",
    kamers: 2,
    tuin: false},
  
    {id: 15,
    pand: "appartement",
    prijs: 369.000,
    oppervlak: 250,
    stad: "Brussel",
    kamers: 3,
    tuin: true},
  
    {id: 16,
    pand: "huis",
    prijs: 370.000,
    oppervlak: 225,
    stad: "Brussel",
    kamers: 3,
    tuin: true},

    {id: 17,
    pand: "huis",
    prijs: 150.000,
    oppervlak: 100,
    stad: "Gent",
    kamers: 2,
    tuin: false},

    {id: 18,
    pand: "appartement",
    prijs: 200.000,
    oppervlak: 150,
    stad: "Gent",
    kamers: 2,
    tuin: true},
  
    {id: 19,
    pand: "appartement",
    prijs: 350.000,
    oppervlak: 200,
    stad: "Antwerpen",
    kamers: 2,
    tuin: true},
  
    {id: 20,
    pand: "huis",
    prijs: 380.000,
    oppervlak: 310,
    stad: "Antwerpen",
    kamers: 3,
    tuin: true}
];

var input = "huis"

function myFunc (input) {
let filteredPand = houses.filter(search => search.pand == input);
for (let i = 0; i<filteredPand; i++) {
    console.log(filteredPand[i])
}
}

myFunc("huis")