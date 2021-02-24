const first_word = ['He is ','She is ','I am ', 'They are ']
const second_word = ['amazing','breathtaking','wonderful','beautiful','clever']

const retElArr = (arr) =>
{
    arr.sort( function() {return 0.5 - Math.random()})
    var elt = arr[0];
    return elt;
};

console.log (retElArr(first_word)+retElArr(second_word));
