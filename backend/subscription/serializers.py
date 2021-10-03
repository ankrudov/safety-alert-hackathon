from collections import UserDict
from django.db.models.base import Model
from rest_framework.serializers import ModelSerializer
from .models import User

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('email','last_login','date_joined')