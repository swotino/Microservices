import sys

def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def mul(a, b):
    return a * b

def div(a, b):
    return a / b

args = sys.argv
if len(args) == 4:
    cmd = args[1]
    if 'add' in cmd:
        print(add(float(args[2]), float(args[3])))
    elif 'sub' in cmd:
        print(sub(float(args[2]), float(args[3])))
    elif 'mul' in cmd:
        print(mul(float(args[2]), float(args[3])))
    elif 'div' in cmd:
        print(div(float(args[2]), float(args[3])))
    else:
        print("Unknown command")
else:
    print("Wrong parameters")