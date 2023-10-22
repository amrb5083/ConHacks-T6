import schedule
import time

class Account:
    def __init__(self):
        self.progressReport = ""
        self.breakPeriod = 0
        self.startTime = 0
        self.incentive = 0

        self.breakPeriods = [
            1500,  # 25 minutes.
            3000,  # 50 minutes.
            4500,  # 75 minutes.
            6000  # 100 minutes.
        ]

        self.incentiveRange = [
            50,  # for 30 minutes.
            125,  # for 1 hour.
            225,  # for 2 hours.
            345  # for 3 hours.
        ]

        self.sessionManagement = [
            {
                'username': [],
                'incentive': 0,
                'break': []
            }
        ]

AccountClass = Account()

def set_start_hour():
    startHour = input("Select a start time in seconds: ")
    return int(startHour)

startHour = set_start_hour()

def valueIncrementer():
    # Calculate the incentive based on the selected startHour
    if startHour <= 1800:
        AccountClass.incentive = AccountClass.incentiveRange[0]
    elif startHour <= 3600:
        AccountClass.incentive = AccountClass.incentiveRange[1]
    elif startHour <= 7200:
        AccountClass.incentive = AccountClass.incentiveRange[2]
    else:
        AccountClass.incentive = AccountClass.incentiveRange[3]

def session_timer(duration_seconds):
    print("Session timer started.")
    time.sleep(duration_seconds)
    print("Session timer completed!")

def functionCall():
    
    session_timer(startHour)
    
    AccountClass.valueIncrementer()
    print(f"Incentive earned: {AccountClass.incentive} points")


schedule.every(startHour).seconds.do(functionCall)


while True:
    schedule.run_pending()
    time.sleep(1)
