#linear search => go through each item of the array till you find that value 
#   or the whole lsit has been search

def linear_search(array, value ):
    i = 0
    while i < len(array):  
        if array[i] == value: 
            return i
        i += 1
    return -1

array = [1,2,3,4,5,6,7,8,9]
num = int(input("Enter a number to find: "))

print(linear_search(array, num))

# O(n) number of steps increase in a direct relationship to the increase of n. 
#has to go through every value of n at worst case scenario. best case: O(1)