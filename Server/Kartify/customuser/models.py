from django.db import models
import random
import string

# Create your models here.

from django.contrib.auth.models import AbstractUser, User

class CusstomUser(User):
    
    # first_name = models.CharField(max_length=50)
    # last_name = models.CharField(max_length=50)
    # email = models.EmailField(unique=True)
    # password_1 = models.CharField(max_length=10)
    contact_no = models.CharField(max_length=10, default='')
    address = models.TextField(max_length=100, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now =True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["email","first_name","last_name","password","contact_no","address"]

    

    def __str__(self):
        return self.email