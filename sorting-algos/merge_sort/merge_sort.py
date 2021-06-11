#divide the array into smaller subset
#divide and conquer 
#sort left half, sort right half, then compare element by element
#sorting takes place by dividing all the way down to single elements and merging up
#recursive 

# def merge_sort(arr, left, right):
#     if left < right:
#         mid = (left + right) // 2
#         merge_sort(arr, left, mid)
#         merge_sort(arr, mid + 1, right)
#         merge(arr, left, mid, right)

# def merge(arr, left, mid, right):
#     i = left
#     j = mid + 1
#     k = left

#     temparr = [0] * (right + 1)

#     while i <= mid and j <= right:
#         if arr[i] < arr[j]:
#             temparr[k] = arr[i]
#             i = i + 1
#         else:
#             temparr[k] = arr[j]
#             j += 1
#         k += 1
#         while i <= mid:
#             temparr[k] = arr[i]
#             i += 1
#             k += 1
#         while j <= right: 
#             temparr[k] = arr[j]
#             j += 1
#             k += 1
#         for x in range(left, right+1):
#             arr[x] = temparr[x]

# arr = [3, 5, 8, 9, 6, 2]

# print("originial:", arr)
# merge_sort(arr, 0, len(arr)-1)
# print("sorted:", arr)

def mergesort(A, left, right):
    if left < right:
        mid = (left + right) // 2
        mergesort(A, left, mid)
        mergesort(A, mid+1, right)
        merge(A, left, mid, right)

def merge(A, left, mid, right):
    i = left
    j = mid+1
    k = left
    B = [0] * (right+1)
    while i <= mid and j <= right:
        if A[i] < A[j]:
            B[k] = A[i]
            i = i + 1
        else:
            B[k] = A[j]
            j = j + 1
        k = k + 1

    while i <= mid:
        B[k] = A[i]
        i = i + 1
        k = k + 1

    while j <= right:
        B[k] = A[j]
        j = j + 1
        k = k + 1
    for x in range(left,right+1):
        A[x] = B[x]


A = [3, 5, 8, 9, 6, 2]
print('Original Array:',A)
mergesort(A,0,len(A)-1)
print('Sorted Array:',A)