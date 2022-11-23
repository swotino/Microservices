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


@app.route("/")
def index():
    return "Mammeta works!"

@app.route("/calculate")
def calculate() -> str: 
    print(request.args)
    try:
        cmd = request.args.get("cmd")
        a = request.args.get("a")
        b = request.args.get("b")
        if cmd and a and b:
            if 'add' in cmd:
                return str(add(float(a), float(b)))
            elif 'sub' in cmd:
                return str(sub(float(a), float(b)))
            elif 'mul' in cmd:
                return str(mul(float(a), float(b)))
            elif 'div' in cmd:
                return str(div(float(a), float(b)))
            else:
                return "Unknown command"
        else:
            return "Wrong command"
    except Exception as error:
        print(error)

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