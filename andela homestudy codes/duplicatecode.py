def remove_duplicates(string):
   new_string = "".join(sorted(set(string)))
   if new_string:
     return (new_string, len(string)-len(new_string))
   else:
     print = "Please provide only alphabets"
