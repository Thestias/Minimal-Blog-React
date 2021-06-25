"""MinimalBlog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.urls import path
from .views import BlogList, CategoryList, login_view, Register

urlpatterns = [
    path("blog/", BlogList.as_view(), name="blog_list"),
    path("category/", CategoryList.as_view(), name="category_list"),
    path("login/", login_view, name="login-api"),
    path("register/", Register.as_view(), name="register-api")
]
