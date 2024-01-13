// Your code here:
function sing() {

    let lyrics = ''

    for (let patron = 100; patron >= 0; patron--) {

        for (let compas = 0; compas < 4; compas++) {
            
            if (patron == 1) {

                if (compas == 0) lyrics += `${patron} bottle of milk on the wall, `
                else if (compas == 1) lyrics += `${patron} bottle of milk.\n`
                else if (compas == 2) lyrics += `Take one down and pass it arround, `
                else if (compas == 3) lyrics += `no more bottles of milk on the wall. \n`
            }

            else if (patron == 0) {

                if (compas == 0) lyrics += `No more bottles of milk on the wall, `
                else if (compas == 1) lyrics += `no more bottles of milk.\n`
                else if (compas == 2) lyrics += `Go to the store and buy some more, `
                else if (compas == 3) lyrics += `99 bottles of milk on the wall. \n`
            }

            else {

                if (compas == 0) lyrics += `${patron} bottles of milk on the wall, `
                else if (compas == 1) lyrics += `${patron} bottles of milk.\n`
                else if (compas == 2) lyrics += `Take one down and pass it arround, `
                else if (compas == 3) lyrics += `${patron -1} bottles of milk on the wall. \n`
            }
        }
    }

    return lyrics
}

console.log(sing())