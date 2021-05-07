#binary search only works on sorted arrays
#looks at middle element if it is greater, 
    # it starts at left half
    #if it is less it starts at right half etc.
# O(logN) time complexity
import math 

#iteratve
# def binary_search(array, value):
#     left = 0
#     right = len(array) - 1
    
#     while left <= right:
#         middle = math.floor((left + right)/2)
#         if value == array[middle]:
#             return middle
#         elif value < array[middle]:
#             right = middle - 1
#         elif value > array[middle]:
#             left = middle + 1
#     return -1

#recurrsion 
    #check to see if left is greater than right -base case to rerturn 
def binary_search(array, value, left, right):
    middle = math.floor((left + right)/2)

    if left > right:
        return -1
    else:
        if value == array[middle]:
            return middle
        elif value > array[middle]:
            return binary_search(array, value, middle + 1, right)
        elif value < array[middle]:
            return binary_search(array, value, left, middle -1)

array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
num = int(input("Enter a value to find "))
print(binary_search(array, num, array[0], len(array)-1))