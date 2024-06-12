# jeu-de-go

dépendances à installer :
pip install django==4.1

pip install pytest pytest-django

pip install beautifulsoup4

pip install html5lib

pip install requests

pip install mysqlclient

pip install sgfmill

pip install django-extensions


Effectuer les migrations :

python ./manage.py makemigrations api
python manage.py migrate

lancer le scraping :

python manage.py runscript api.scraping 


ignorer pour l'instant :
pytest