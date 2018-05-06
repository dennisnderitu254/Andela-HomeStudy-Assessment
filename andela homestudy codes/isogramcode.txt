def is_isogram(word):
    '''This function tests for isogram'''
    word_set = set(word)

    if word.strip() == "":
        return (word, False)

    elif len(word) == len(word_set):
        return (word, True)

    elif type(word)!= str :
        raise TypeError

    else:
        return (word, False)