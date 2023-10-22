
class information:
    def __init__(self,name, email, password):
        self.name = name
        self.email = email
        self.password = password
    def __str__(self):
        return f"{self.name} {self.email} {self.password}"
    def storeData (self):
        storage.append(self)
        

class singleUser(information):
   pass

  
# information
storage = []
username = ""
userEmail = ""
userPassword = ""
user1 = singleUser(username, userEmail, userPassword)
    
user1.storeData()
for val in storage:
    print(val.name, val.email, val.password)
# username1 = input("Enter your username: ")
# userEmail1 = input("Enter your email: ")
# userPassword1 = input("Enter your password: ")

# user2 = singleUser(username1, userEmail1, userPassword1)
# print(user2)
# data1 = user2.storeData()
# print(data1)
