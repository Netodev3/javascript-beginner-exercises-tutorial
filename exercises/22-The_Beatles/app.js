function sing() {

    let lyrics = ""

    for (let i = 0; i <= 10; i++) {

        if (i == 4) lyrics += "there will be an answer, "
        else if (i == 10) lyrics += "whisper words of wisdom, "
        else lyrics += "let it be, "
    }
    return lyrics
}

//Your code above ^^^

console.log(sing());