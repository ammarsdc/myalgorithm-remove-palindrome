function isPalindrome(word) {
    return word === word.split("").reverse().join("");
}

function removePalindrome(phrase) {
    return phrase.toLowerCase()
        .split(" ")
        .filter(word => !isPalindrome(word))
        .join(" ");
}

function test() {
    document.write(removePalindrome("Text contains malayalam and level words<br />"));
    document.write(removePalindrome("abc bcd<br />"));
}