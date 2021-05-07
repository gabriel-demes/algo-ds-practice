#sum(n) = 1 + 2 + 3 + 4 + ..... +(n-2)+(n-1)+n
#n=5
#sum(n) = Sum(n-1)+n
#use recurrsion 


def sum_of_n( n ):
    if n == 0:
        return 0
    return sum_of_n(n-1) +n  #recurrsion 4 => sum_of_n(3) + 4 => sum_of_n(2) + 3 + 4 sum_of_n(1) + 2 + 3 + 4 => 1 + 2 + 3 + 4


num = input('Enter Number:')
n = int(num)
print(sum_of_n(n))