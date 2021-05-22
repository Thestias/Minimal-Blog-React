from rest_framework import generics
from api.serializers import BlogSerializer, CategorySerializer
from api.models import Blog, Category


class BlogList(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
