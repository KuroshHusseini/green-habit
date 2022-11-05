import random
import json
import string

data = {
  "purchases": [],

  "customers": [
    {
      "id": "44031ac5-9cea-4ec6-8102-ae96f08798ac",
      "first_name": "Linnea",
      "last_name": "O'Halligan",
      "email": "lohalligan0@furl.net",
      "password": "134"
    },
    {
      "id": "6aeb31ec-81b1-430e-bfbe-13c140feda0c",
      "first_name": "Laureen",
      "last_name": "Rivallant",
      "email": "lrivallant1@ocn.ne.jp",
      "password": "1234"
    },
    {
      "id": "1bee39b9-0d63-4b1d-b626-924f762aa817",
      "first_name": "Wilhelmine",
      "last_name": "Azema",
      "email": "wazema2@barnesandnoble.com",
      "password": "124"
    }
  ]
}

companies = [
    'Lidl',
    'Chips Man',
    'Prisma',
    'Everything and anything shop',
    'Farmer\'s market',
    'Luigi\'s',
    'Tax-Free'
]

products = [
    'Apples',
    'MacBook Pro M5',
    'Round-trip ticket on Interrail R1',
    'Fried chicken',
    'Coca Cola',
    'Lime',
    'Plants',
    'Olive oil',
    'Flight from Helsinki to Gran Canaria',
    'Redbull',
    'Haribo gummies',
    'Brownie cookies',
    'Cap'
]

for i in range(30):
    purchase = {
        "id": "".join(random.choice(string.ascii_letters) for i in range(20)),
        "userId": "64dd985a9063ffaaed8893eee5450db5",
        "amount": 0,
        "company": random.choice(companies),
        "totalCarbon": 0,
        "averageCarbon": 0,
        "products": []
    }
    for j in range(random.randrange(1, 20)):
        amount = random.randrange(0, 50)
        carbon = round(random.randrange(1, 100 - i * 2) / 100, 2)
        purchase["products"] += [{
            "product": random.choice(products),
            "amount": amount,
            "carbon": carbon
        }]

        purchase['amount'] += amount
        purchase['totalCarbon'] += carbon

    purchase['averageCarbon'] = round(purchase['totalCarbon'] / len(purchase['products']), 2)
    purchase['totalCarbon'] = round(purchase['totalCarbon'], 2)
    data["purchases"] += [purchase]

with open("db.json", "w") as outfile:
    json.dump(data, outfile)