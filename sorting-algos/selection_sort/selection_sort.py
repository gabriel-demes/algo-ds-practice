#start from unsorted array select minimum element from array 
# and put it in correct postion, swaps postions 
# 6   3   8   1
# 1   3   8   6
# 1   3   8   6
# 1   3   6   8
# 1   3   6   8

#O(n^2) has to run through loop twice and compare each element. 

def selection_sort(array):
    n = len(array)

    for i in range(n-1):
        # print(array)
        position = i
        for j in range(i+1, n):
            # print(array)
            if array[j] < array[position]:
                position = j
            temp = array[i]
            array[i] = array[position]
            array[position] = temp

array = [3,5,8,9,2]

selection_sort(array)
print(array)
