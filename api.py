from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

users = [
    {
        "name": "Mack",
        "age": "34",
        "job": "Plumber"
    },
    {
        "name": "Danielle",
        "age": "26",
        "job": "Programmer"
    },
    {
        "name": "Nick",
        "age": "48",
        "job": "Dancer"
    }
]
class AllUsers(Resource):
    # return all users. Use GET method
    def get(self):
        return users, 200

class User(Resource):

    # return specified user. Use GET method
    def get(self, name):
        for user in users:
            if(name == user["name"]):
                return user, 200
        return "User not Found", 404
    
    # create new user. Use POST method
    def post(self, command):
        parser = reqparse.RequestParser()
        parser.add_argument("name")
        parser.add_argument("age")
        parser.add_argument("job")
        args = parser.parse_args()

        for user in users:
            if(args["name"] == user["name"]):
                return "User with name {} already exists".format(args["name"]), 400
        
        user = {
            "name": args["name"],
            "age": args["age"],
            "job": args["job"]
        }
        users.append(user)
        return user, 201
    
    def put(self, name):
        parser = reqparse.RequestParser()
        parser.add_argument("age")
        parser.add_argument("job")
        args = parser.parse_args()

        for user in users:
            if(name == user["name"]):
                user["age"] = args["age"]
                user["job"] = args["job"]
                return user, 200
        
        user = {
            "name": name,
            "age": args["age"],
            "job": args["job"]
        }
        users.append(user)
        return user, 201
    
    def delete(self,name):
        global users
        users = [user for user in users if user["name"] !=name]
        return "{}  is deleted.".format(name), 200
    
api.add_resource(User, "/user/<string:command>")
api.add_resource(AllUsers,"/users" )
app.run(debug=True)