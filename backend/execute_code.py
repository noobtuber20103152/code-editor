import sys
import os

def main():
    if len(sys.argv) != 3:
        print("Usage: python3 execute_code.py <code_filename> <input_filename>")
        sys.exit(1)

    code_filename = sys.argv[1]
    input_filename = sys.argv[2]

    if not os.path.isfile(code_filename):
        print(f"Error: {code_filename} not found", file=sys.stderr)
        sys.exit(1)

    if not os.path.isfile(input_filename):
        print(f"Error: {input_filename} not found", file=sys.stderr)
        sys.exit(1)

    try:
        with open(input_filename, 'r') as input_file:
            input_data = input_file.read()
        
        with open(code_filename, 'r') as code_file:
            code = code_file.read()
        
        sys.stdin = open(input_filename, 'r')
        exec(code, {'__name__': '__main__'})
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)

if __name__ == "__main__":
    main()
