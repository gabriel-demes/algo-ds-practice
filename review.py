#binary search

def binary_search(array,value):
    left = 0
    right = len(array)

    while left <= right:
        middle = (left+right) // 2
        if value == array[middle]:
            return middle
        elif value > array[middle]:
            left = middle + 1
        elif value < array[middle]:
            right = middle - 1
    return -1 

def selection_sort(array):
    for i in range(len(array)-1):
        position = i
        for j in range(i+1,len(array)):
            if array[i] > array[j]:
                temp = array[i]
                position = j
                array[i] = array[position]
                array[position] = temp


