"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
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
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
# from example.app.views import OrderPage

from donater import views

from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', views.main),
    path('project/create/', views.create_project),
    path('project/transaction/', views.send_transaction),
    path('project/list/', views.project_list),
    path('project/exact/', views.project_exact),
    path('profile/', views.profile),
    # url(r'^api-auth/', include('rest_framework.urls', )),
    url(r'^', include(router.urls)),
    path('rest-auth/', include('rest_auth.urls')),
    url(r'^o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
]
