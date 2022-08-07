// 6 kyu If you can read this
function to_nato(words) {
  // PREP:
  // P a string of words, space seperated.
  // R Each word converted to dictionary provided, with punctuation kept and spaces removed.
  // E: Provided
  // Psudeocode:
  // split words into an array with space delimiter
  // map that array, check two things -- beginning letter, and if ends with punctuation
  // covert to dictionary based on beginning letter. Add punctuation if it was found.
  // join(' ') resulting array into a string, and return

  // Problem: this doesn't account for repeated punctuation nor beginning punctuation.
  function to_nato(words) {
    return words
      .split("")
      .filter((c) => c !== " ")
      .map((c) => (NATO[c.toLowerCase()] ? NATO[c.toLowerCase()] : c))
      .join(" ");
  }
}
