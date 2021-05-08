#start with unordered array
#compare consecutive elements. if left > right then swap them

def bubble_sort(array):
    n = len(array)
    for p in range(n - 1, 0, -1):
        for i in range(n-1):
            if array[i] > array[i+1]:
                array[i],array[i+1] = array[i+1], array[i]


array = [3,7,4,9,1,2,6,5]

print(array)
bubble_sort(array)
print(array)