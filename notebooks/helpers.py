import math
def into_maximise(objective_function):
    return -objective_function 

# Implementation of the sphere function (3 dimensions)
# https://www.sfu.ca/~ssurjano/spheref.html
# Global minima is at (0, 0, 0)
def sphere_f_3D(x):
    dimensions = 3
    y = 0
    for i in range(dimensions):
        y += x[i] ** 2
        
    return y