#start with unordered list. Start with element at index 1
#compare element to left, if el. to left is bigger, swap positions.
#move on to element at index 2 and continue. 

#o(n^2)

def insertion_sort(array):
    n = len(array)

    for i in range(1,n):
        position = i 
        while array[position] < array[position-1] and position > 0:
            temp = array[position-1]
            array[position-1] = array[position]
            array[position] = temp
            position -= 1 #don't forget this!

array = [3,5,2,5,6,7,1,8]

print(array)
insertion_sort((array))
print(array)
