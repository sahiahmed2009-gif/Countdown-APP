import datetime
calculation = {}
def print_statement():
    if time_left.days <= 30:
       pace = "You should quickly do it!!!"
    elif  30 <= time_left.days <= 90:
       pace = "Do it quickly but also perfectly"
    else:
       pace = "Do it slowly but also perfectly"
    print(f"Dear User! Time remaining for goal:There is {time_left.days} days left to achieve your goal({goal})")
    print(pace)
user_input = input("Enter your goal with a deadline separated by a colon (e.g. study:2025-12-30)\n")
user_input_list = user_input.split(":")
goal = user_input_list[0]
deadline_str = user_input_list[1].strip()
deadline = datetime.datetime.strptime(deadline_str, "%Y-%m-%d")
today = datetime.datetime.now()
# timedelta
time_left = deadline - today
# Convert timedelta → dictionary with only days
calculation = {goal: time_left.days}
print_statement()
