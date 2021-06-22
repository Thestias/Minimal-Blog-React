from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.contrib.auth import authenticate, login
import json
from rest_framework import generics
from .serializers import BlogSerializer, CategorySerializer
from .models import Blog, Category


class BlogList(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


@require_POST
def login_view(request):
    """
    This function logs in the user and returns
    and HttpOnly cookie, the `sessionid` cookie
    """
    data = json.loads(request.body)['data']
    username = data.get("username")
    password = data.get("password")
    if username is None or password is None:
        return JsonResponse(
            {"error": {"__all__": "Please enter both username and password"}}, status=400)
    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({"info": "Successfully logged in"})
    return JsonResponse({"error": "Invalid credentials"}, status=400)
