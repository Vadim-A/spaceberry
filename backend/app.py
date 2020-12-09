from flask import Flask, request, jsonify, make_response
import joblib
import numpy as np
from sklearn import datasets
from sklearn.model_selection import train_test_split

app = Flask(__name__)

classifier = joblib.load('classifier.joblib')

# Get the dataset
dataset = datasets.load_iris()

# Split the dataset into features and labels
X = dataset.data
y = dataset.target

# Split the dataset into training (80%) and testing (20%) data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0, shuffle = True)

@app.route('/api', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return post_func()
    else:
        return get_func()

def post_func():
  return 'works'

def get_func():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")

    prediction = classifier.predict(X_test)
    print(prediction)

    types = { 0: "Iris Setosa", 1: "Iris Versicolour ", 2: "Iris Virginica"}
    response = jsonify({
      "statusCode": 200,
      "status": "Prediction made",
      "result": "The type of iris plant is: " + types[prediction[0]]
      })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == '__main__':
    app.run()
