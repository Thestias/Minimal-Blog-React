from django.contrib.auth.models import User
from rest_framework import serializers, validators
from .models import Blog, Category


class CreateUserSerializer(serializers.ModelSerializer):
    '''
    Creates User, also adds a field for password confirmation
    '''
    # Validating that the email field is unique
    email = serializers.EmailField(required=True, validators=[validators.UniqueValidator(queryset=User.objects.all())])
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password2')
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        '''
        This method interjects itself between the default validate() method and checks that password and
        password2 (confirmation) are the same, then continues with the normal flow of validate()
        '''
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Password didn't match")

        return super(CreateUserSerializer, self).validate(data)

    def create(self, validated_data):
        '''
        Recommended way of creating new users by Django
        '''
        return User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])


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
        rep["categories"] = CategorySerializer(instance.categories.all(), many=True).data
        return rep
