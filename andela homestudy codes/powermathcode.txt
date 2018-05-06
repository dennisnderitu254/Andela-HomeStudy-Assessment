def power(a,b):
    if b == 0:
      return 1
    else:
      return eval(((str(a)+"*")*b)[:-1])