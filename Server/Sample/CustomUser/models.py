from django.contrib.admin.models import LogEntry
from django.contrib.auth import get_user_model
from django.db import models
from django.contrib.admin import models as admin_models
from django.contrib.auth.models import AbstractUser


class CustomizedUser(AbstractUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    password = models.CharField(max_length=10)
    contact_no = models.CharField(max_length=10)
    address = models.TextField(max_length=100)

    def __str__(self):
        return self.email


class CustomLogEntry(LogEntry):
    user1 = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    


admin_models.LogEntry = CustomLogEntry