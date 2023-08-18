from django.db import models
import random 
import string
from django.utils import timezone
# from django.contrib.auth.models import AbstractUser
# from .manager import UserManager
# from django.contrib.admin.models import LogEntry
# from django.contrib.auth import get_user_model
# from django.db import models
# from django.contrib.admin import models as admin_models
# from django.contrib.auth.models import AbstractUser



# Create your models here.

class Buyers(models.Model):
    buyer_id = models.CharField(primary_key=True , max_length=10, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=10)
    contact_no = models.CharField(max_length=10)
    conatact_no= models.CharField(max_length=10)
    address = models.TextField(max_length=100)
    # created_at = models.DateTimeField(auto_now_add=True)
    # modified_at = models.DateTimeField(auto_now =True)
    
    # def save(self, *args, **kwargs):
    #         self.buyer_id = "BR"+"".join(random.choices(string.digits, k=8))
    #         super().save(*args, **kwargs)


# class CustomUser(AbstractUser):


#     username = None
#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=10)
#     contact_no = models.CharField(max_length=10)
#     address = models.TextField(max_length=100)
#     created_at = models.DateTimeField(auto_now_add=True)
#     modified_at = models.DateTimeField(auto_now =True)

#     objects= UserManager()

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = []

#     def __str__(self):
#         return self.email

    # def has_perm(self, perm, obj=None):
    #     "Does the user have a specific permission?"
    #     # Simplest possible answer: Yes, always
    #     return True

    # def has_module_perms(self, app_label):
    #     "Does the user have permissions to view the app `app_label`?"
    #     # Simplest possible answer: Yes, always
    #     return True 


# class CustomLogEntry(LogEntry):
#     user1 = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    


# admin_models.LogEntry = CustomLogEntry

