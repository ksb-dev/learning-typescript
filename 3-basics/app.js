// let n1: any
// let n2: string
// n1 = 5
// n2 = 'Kedar'
// n2 = n1 // successful
var n1;
var n2;
n1 = 5;
n2 = 'Kedar';
//n2 = n1 // error
function generateError(msg, code) {
    throw { msg: msg, code: code };
}
generateError('An error occured', 500);
