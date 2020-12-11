# spaceberry

# Backend
## Запуск
1. cd backend
2. virtualenv -p Python3 .
3. source bin/activate
4. pip install -r requirements.txt
5. python3 model.py
6. FLASK_APP=app.py flask run

cd /etc/nginx/conf.d/
sudo nano spaceberry.conf

cd /var/www/spaceberry/backend/