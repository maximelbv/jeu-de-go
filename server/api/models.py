from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, is_admin=False):
        if not email:
            raise ValueError("L'email est requis")
        user = self.model(email=self.normalize_email(email), is_admin=is_admin)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password=password, is_admin=True)
        return user

class CustomUser(AbstractBaseUser):
    email = models.EmailField(unique=True)
    is_admin = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return self.is_admin

class Tournois(models.Model):
    event = models.CharField(max_length=100)
    round = models.CharField(max_length=5)
    black_player = models.CharField(max_length=100)
    black_rank = models.CharField(max_length=100)
    white_player = models.CharField(max_length=100)
    white_rank = models.CharField(max_length=100)
    komi = models.FloatField()
    result = models.CharField(max_length=10)
    date = models.CharField(max_length=10, null=True)

class Positions(models.Model):
    sgf_metadata = models.ForeignKey(Tournois, on_delete=models.CASCADE)
    positions = models.CharField(max_length=2)
    player = models.CharField(max_length=5)

class Tsumego(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)