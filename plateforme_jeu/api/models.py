from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # AbstractUser contient déjà les champs nom, mot de passe et email.
    pass
