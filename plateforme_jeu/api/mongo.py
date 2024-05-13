from pymongo import MongoClient
from pymongo.errors import PyMongoError

client = MongoClient(host='localhost', port=27017)

db = client.test

p = {
    'first_name': 'John',
    'email': 'john@doe.com'
}

try:
    result = db.user.insert_one(p)
    print(result)
except PyMongoError as e:
    print("Une erreur s'est produite lors de l'insertion:", e)

client.close()