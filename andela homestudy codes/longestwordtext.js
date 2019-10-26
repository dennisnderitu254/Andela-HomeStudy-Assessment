function longest(str) {
    if(typeof str !== 'string') return '';
    #this declaring a variable named word
    var words = str.split(' ');
    var longest = '';

    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
}
