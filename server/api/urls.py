"""
URL configuration for plateforme_jeu project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import auth_views, tsumego_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', auth_views.Register.as_view(), name='register'),
    path('login/', auth_views.Authentification.as_view(), name='login'),
    path('tournaments/all', tsumego_views.TournoisList.as_view(), name='tournaments-list'),
    path('positions/all', tsumego_views.PositionsList.as_view(), name='positions-list'),
    path('tournament/<int:id>/', tsumego_views.TournoisDetailWithPositions.as_view(), name='tournament'),
]
