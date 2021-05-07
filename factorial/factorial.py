def factorial(n):
    if n == 0:
        return 1
    else:
        return factorial(n-1) * n


num = input("enter a number: ")
n = int(num)
print(factorial(n))