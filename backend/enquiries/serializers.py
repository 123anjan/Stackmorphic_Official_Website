from rest_framework import serializers
from .models import Enquiry

from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from .models import Enquiry, ProjectRequest

User = get_user_model()


class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = ["name", "email", "project_type", "budget", "message"]


class RegisterSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=120)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, min_length=8)

    def validate_email(self, value):
        value = value.lower()
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("An account with this email already exists.")
        return value

    def validate_password(self, value):
        validate_password(value)
        return value

    def create(self, data):
        return User.objects.create_user(
            username=data["email"], email=data["email"],
            password=data["password"], first_name=data["name"],
        )


class ProjectRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectRequest
        fields = ["id", "title", "project_type", "budget", "description",
                  "status", "update_note", "created_at", "updated_at"]
        read_only_fields = ["status", "update_note", "created_at", "updated_at"]