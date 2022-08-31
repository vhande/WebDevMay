function compareTriplets(a, b) {    
    let ascore = 0;
    let bscore = 0;
    let myArr = [];
    for (let i = 0; i<a.length; i++) {
        if (a[i] > b[i]) {
        ascore ++}
        else if (a[i] < b[i]) {
        bscore ++
        }
   
        }
        myArr.push(ascore)
        myArr.push(bscore)
        console.log(myArr)
    }


compareTriplets([5,6,7], [3, 6,10]);