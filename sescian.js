function calculateVolumeAndArea(a) {
    if(isNaN(a) == true || a < 0){
    console.log("Wysatpil blad");
        return 
    } else {
    let V = a*a*a;
    let S = 6 * (a * a);
    console.log(`Objentosc sześcianu: ${V}, całkowita powierzchnia sześcianu: ${S}`);
    }
}


calculateVolumeAndArea(undefined);