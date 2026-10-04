from django.conf import settings
from django.db import models


class Enquiry(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    project_type = models.CharField(max_length=60, blank=True)
    budget = models.CharField(max_length=60, blank=True)
    message = models.TextField(max_length=4000)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} <{self.email}>"


class ProjectRequest(models.Model):
    STATUS = [
        ("submitted", "Submitted"),
        ("reviewing", "Reviewing"),
        ("quoted", "Quoted"),
        ("in_progress", "In progress"),
        ("completed", "Completed"),
        ("cancelled", "Cancelled"),
    ]
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="project_requests")
    title = models.CharField(max_length=140)
    project_type = models.CharField(max_length=60, blank=True)
    budget = models.CharField(max_length=60, blank=True)
    description = models.TextField(max_length=4000)
    status = models.CharField(max_length=20, choices=STATUS, default="submitted")
    update_note = models.TextField(max_length=2000, blank=True)  # shown to the client
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.title} ({self.user})"