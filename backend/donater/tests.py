import json

from django.contrib.auth.models import User
from django.test import TestCase, Client
from django.test.utils import setup_test_environment
from django.utils.encoding import force_text

# Create your tests here.

class CreateProjectTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        user = User(username='name')
        user.save()

    def test_create_project(self):
        json_test = {'user_id': 1,
                     'title': 'First proj',
                     'description': 'desc',
                     'sum': 150,
                     'promise': 'money'}
        test1 = self.client.post('/project/create/', json_test, 'application/json')
        self.assertEqual(test1.status_code, 200, 'STATUS OK')
        self.assertJSONEqual(force_text(test1.content), {'OK': 200}, 'JSON OK')

    def test_main(self):
        test2 = self.client.get('/')
        self.assertEqual(test2.status_code, 200)
        self.assertJSONEqual(str(test2.content, encoding='utf-8'), {"resp": 10}, '/ not ok')

class MainTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    # def
