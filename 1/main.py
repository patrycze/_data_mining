import numpy as np
dataset_filename = "data/affinity_dataset.txt"
X = np.loadtxt(dataset_filename)
print(X[:5])
num_apple_purchases = 0
for sample in X:
    if sample[3] == 1:
        num_apple_purchases += 1
print("{0} people bought Apples" .format(num_apple_purchases))