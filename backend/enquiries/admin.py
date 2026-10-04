from django.contrib import admin
from .models import Enquiry, ProjectRequest

admin.site.register(Enquiry)


@admin.register(ProjectRequest)
class ProjectRequestAdmin(admin.ModelAdmin):
    list_display = ("title", "user", "status", "created_at")
    list_filter = ("status",)
    search_fields = ("title", "user__email")