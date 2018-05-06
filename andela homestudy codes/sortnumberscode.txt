def my_sort(numbers):
    odd  = [n for n in numbers if n % 2 != 0]
    even = [n for n in numbers if n % 2 == 0]
    return sorted(odd) + sorted(even)