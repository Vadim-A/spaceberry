from flask import Flask, request, jsonify, make_response

import pymysql
import pymysql.cursors
import yaml

app = Flask(__name__)

db = yaml.load(open('db.yaml'))

# Подключение к БД
connection = pymysql.connect(
	host = db['mysql_host'],
	user = db['mysql_user'],
	password = db['mysql_password'],
	db = db['mysql_db'],
	cursorclass=pymysql.cursors.DictCursor
)

@app.route('/')
def mainPage():
	try:
		with connection.cursor() as cursor:
			# Read a single record
			sql = "select * from users;"
			cursor.execute(sql)
			result = cursor.fetchone()
			print(result)
	finally:
		return result # {"id":1,"login":"demo","mail":"demo@spaceberry.ru","name":"demo","password":"demo"}

@app.route('/example')
def example():
  return 'Example'

if __name__ == '__main__':
	app.run()
