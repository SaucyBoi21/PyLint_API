# test_pylint.py

def add_numbers(a, b):
    """
    This function adds two numbers.
    """
    return a + b

def subtract_numbers(a, b):
    """
    This function subtracts two numbers.
    """
    return a - b

def main():
    num1 = 10
    num2 = 5

    result_add = add_numbers(num1, num2)
    result_subtract = subtract_numbers(num1, num2)

    print(f"Addition: {result_add}")
    print(f"Subtraction: {result_subtract}")

if __name__ == "__main__":
    main()