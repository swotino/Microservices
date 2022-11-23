import sys
from flask import Flask, request

app = Flask(__name__)

def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def mul(a, b):
    return a * b

def div(a, b):
    return a / b


@app.route("/calculate")
def calculate():
    args = request.args
    if len(args) == 3:
        cmd = args[0]
        if 'add' in cmd:
            return add(float(args[1]), float(args[2]))
        elif 'sub' in cmd:
            return sub(float(args[1]), float(args[2]))
        elif 'mul' in cmd:
            return mul(float(args[1]), float(args[2]))
        elif 'div' in cmd:
            return div(float(args[1]), float(args[2]))
        else:
            return "Unknown command"
    else:
        return "Wrong command"

try:
    if __name__ == '__main__':
        app.run("0.0.0.0", 9090)
except Exception as error:
    print(f"ERROR in webserver: {error}")


#args = sys.argv
#if len(args) == 4:
#    cmd = args[1]
#    if 'add' in cmd:
#        print(add(float(args[2]), float(args[3])))
#    elif 'sub' in cmd:
#        print(sub(float(args[2]), float(args[3])))
#    elif 'mul' in cmd:
#        print(mul(float(args[2]), float(args[3])))
#    elif 'div' in cmd:
#        print(div(float(args[2]), float(args[3])))
#    else:
#        print("Unknown command")
#else:
#    print("Wrong parameters")