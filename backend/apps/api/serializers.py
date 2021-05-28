from rest_framework import serializers
from .models import Blog, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"

    def to_representation(self, instance):
        """
        This method overrides the default representation of the data by modifiying the categories field with
        the serialized categories from the Blog instance
        """
        rep = super().to_representation(instance)
        rep["categories"] = CategorySerializer(
            instance.categories.all(), many=True
        ).data
        return rep
