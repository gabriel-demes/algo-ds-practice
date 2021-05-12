#shell sort starts with unsorted array
#selects one element and moves it multiple positions at a time. 
# similiar to insertion sort

#first compute gap n/2 (n = number of elements)

#Start from first element, compare it to  element at gap left and right

def shell_sort(array):
    gap = len(array) // 2
    n = len(array) - 1

    while gap > 0:
        i = gap
        while i < len(array):
            temp = array[i]
            j = i - gap
            while j >= 0 and array[j] > temp:
                array[j + gap] = array[j]
                j = j - gap
                array[j + gap] = temp
            i = i + 1
        gap = gap // 2

    return array

array = [ 3,5,2,6,4,5,7,8]
shell_sort(array)
print(array)
