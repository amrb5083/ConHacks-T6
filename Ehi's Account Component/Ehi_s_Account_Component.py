#information class
class information:
    def __init__(self,name, email, password): #initializing components
        self.name = name 
        self.email = email
        self.password = password
    def __str__(self):
        return f"{self.name} {self.email} {self.password}"
    def storeData (self): #to store the name, email and password in list
        storage.append(self)
        
# a single user account that inherits information class 
class singleUser(information):
   pass

# information
storage = [] #empty list that stores everything
#initializing strings that hold the information
username = ""
userEmail = ""
userPassword = ""
user1 = singleUser(username, userEmail, userPassword)
    
user1.storeData()
for val in storage: #adds the information in the list
    print(val.name, val.email, val.password)
