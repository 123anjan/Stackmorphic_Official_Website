from django.urls import path
from . import accounts
from .views import create_enquiry, chat

urlpatterns = [
    path("enquiries/", create_enquiry),
    path("chat/", chat),
    path("auth/register/", accounts.register),
    path("auth/login/", accounts.login),
    path("auth/logout/", accounts.logout),
    path("auth/me/", accounts.me),
    path("requests/", accounts.RequestList.as_view()),
]