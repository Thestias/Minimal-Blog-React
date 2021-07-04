from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.contrib.auth import authenticate, login

from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .serializers import BlogSerializer, CategorySerializer, CreateUserSerializer
from .models import Blog, Category
import json


class BlogList(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        # Sends the serializer the User
        serializer.save(author=self.request.user)


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class Register(generics.CreateAPIView):
    '''
    This function registers a User. Only allows POST
    '''
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer

    def post(self, request):
        serializer = CreateUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

    # this function CHECKS that the credentials are valid for the user
    user = authenticate(username=username, password=password)
    if user is not None:
        # i believe this one PERSISTS the authenticated user with a session id
        login(request, user)
        return JsonResponse({"info": "Successfully logged in"})
    return JsonResponse({"error": "Invalid credentials"}, status=400)
