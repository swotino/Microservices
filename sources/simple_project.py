import sys

print('First Python app')
parameters = sys.argv
if len(parameters) > 1:
    name = parameters[1]
else:
    name = "Mario"
print(f'Hello {name}!')

print('End project')