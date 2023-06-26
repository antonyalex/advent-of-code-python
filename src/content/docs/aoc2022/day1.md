---
title: Day 1 - Calorie Counting 🍗 
description: A solution to Day 1
template: doc
---
In this post I'll be walking you through my [day 1](https://adventofcode.com/2022/day/1)
[Advent of Code 2022](https://adventofcode.com/2022)
solution.

---
## Analyzing the input
The input consists of numbers which represents the calorie count of
the meals taken by the Elves. The inventory of one Elf is separated
from the next by newlines. Let's take a look at the sample input to
make it clear.

```
1000    # first elf
2000
3000

4000    # second elf

5000    # third and so on
6000

7000
8000
9000

10000
```

This contains the inventory data of five elves. The sum of the numbers
gives the total calories in the snacks carried by each elf. Part 1 involves
finding the number of calories being carried by the elf with the most
calories.

Now let's dive into a detailed explanation of each line of the code.

---

## Part 1

```py
with open('input.txt', 'r') as f:
```
This line opens a file named 'input.txt' in read mode using the open() function. The file is opened within a context manager, denoted by the with statement. Using a context manager ensures that the file is properly closed after reading, even if an exception occurs.

```py
lines = [i.rstrip() for i in f.readlines()]
```

Here, we read all the lines from the file f using the readlines() method. Each line is stripped of any trailing whitespace using the rstrip() method. The resulting lines are stored in a list named lines using a list comprehension.

The result is a list which looks something like this:
```
['1000', '2000', '3000', '', '4000', '',....]
```

```py
sum_calories = []
sum_calories_current_elf = 0
```
Two variables are initialized: sum_calories, an empty list to store the sums of caloric values of the food carried by all the elves, and sum_calories_current_elf, a variable to keep track of the sums of caloric values of the food carried by each elf.

```py
for i in lines:
```
This initiates a loop that iterates over each element i in the lines list.

```py
    if i != "":
        sum_calories_current_elf += int(i)
```
Inside the loop, we check if the current element i is an empty string. If it is not empty, we convert it to an integer using the int() function and add it to the total calories of the food carried by the current elf which is stored in sum_calories_current_elf.

```py
    else:
        sum_calories.append(sum_calories_current_elf)  
        sum_calories_current_elf=0
```

However,if the current element i is an empty string, it signifies the end of the caloric values of the food carried by the current elf. We append the value stored in sum_calories_current_elf to the sum_calories list. Then, we reset sum_calories_current_elf to 0 to calculate the caloric value for the next elf.

```py
sum_calories = sorted(sum_calories)
```
After processing all the data, we sort the sum_calories list in ascending order.

```py
print("Part 1: " + str(sum_calories[len(sum_calories) - 1]))
```

Finally, we print the results.We need to find the total calories carried by the elf carrying the most calories.This is the last element in the sorted sum_calories list. 

---

## Part 2

```py
print("Part 2: " + str(sum(sum_calories[len(sum_calories) - 3 : len(sum_calories)])))
```
art 2 is pretty much the same as part 1 except that here you need to find the top three elves with most number of calorie count in their inventory and sum it up.For this we  slice the sorted sum_calories list and applying the sum() function.

And there you have it,we're done with Day 1 of this 25 day event.

---

## Full Solution
```py
with open('input.txt','r') as f:
    lines=[i.rstrip() for i in f.readlines()]
    print(lines)
    sum_calories=[]
    sum_calories_current_elf=0
    for i in lines:
        if i!="":
            sum_calories_current_elf+=int(i)
        else:
            sum_calories.append(sum_calories_current_elf)  
            sum_calories_current_elf=0
    sum_calories=sorted(sum_calories)
    print("Part 1:"+str(sum_calories[len(sum_calories)-1]))
    print("Part 2:"+str(sum(sum_calories[len(sum_calories)-3:len(sum_calories)])))
```


