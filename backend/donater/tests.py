import json

from django.contrib.auth.models import User
from django.test import TestCase, Client
from django.test.utils import setup_test_environment
from django.utils.encoding import force_text

# Create your tests here.
from donater.models import Projects


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
        self.assertJSONEqual(force_text(test1.content), {'OK': 200})


class MainTestCase(TestCase):
    def setUp(self):
        self.client = Client()

    def test_main(self):
        test = self.client.get('/')
        self.assertEqual(test.status_code, 200)
        self.assertJSONEqual(force_text(test.content), {"resp": 10})


class ProjectListTest(TestCase):
    def setUp(self):
        self.client = Client()
        user = User(username='name')
        user.save()
        p = Projects(title='first', author_id=user, description='desc', sum=10)
        p.save()

    def test_project_list(self):
        json_req = {'user_id': 1}
        test = self.client.get('/project/list/', json_req)
        self.assertEqual(test.status_code, 200)
        json_test = {'list':
                         [{'title':'first',
                           'have_sum': 0,
                           'sum': 10,
                           'desctiption': 'desc',
                           'deadline': '2018-10-27T17:16:29.780Z',
                            'author_username': 'name'
                           }]}

        # self.assertJSONEqual(force_text(test.content), json_test)
