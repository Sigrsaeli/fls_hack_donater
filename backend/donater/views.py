import json

from django.contrib.auth.models import User, Group
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_protect

from rest_framework import viewsets

from donater.models import Projects, Transaction
from donater.serializers import UserSerializer, GroupSerializer


def main(request):
    a = {'resp': 10}
    # return HttpResponse('Hello')
    return JsonResponse(a)

@csrf_protect
def create_project(request):
    response = {}
    if request.method == 'POST':
        req = json.loads(str(request.body, encoding='utf-8'))
        user = User.objects.get(id=int(req['user_id']))
        title = req['title']
        desc = req['description']
        attach = None
        if hasattr(req, 'attachment'):
            attach = req['attachment']
        summ = int(req['sum'])
        tags = None
        if hasattr(req, 'tags'):
            tags = req['tags']
        promise = req['promise']
        proj = Projects(author_id=user, title=title,
                        description=desc, attachment=attach,
                        sum=summ, tags=tags, promise=promise)
        proj.save()
        # user_id = req['user_id']
        response = {'OK': 200}
    elif request.method == 'GET':
        response = {'USE POST': 404}
    return JsonResponse(response)

@csrf_protect
def send_transaction(request):
    response = {}
    if request.method == 'POST':
        req = json.loads(str(request.body, encoding='utf-8'))
        user_id = int(req['user_id'])
        project_id = int(req['project_id'])
        sum = int(req['sum'])
        proj = Projects.objects.get(id=project_id)
        user = User.objects.get(id=user_id)
        tr = Transaction(author_id=user, project_id=proj, sum=sum)
        tr.save()
        response = {'OK': 200}
    return JsonResponse(response)


# TEST WITH USERS
def project_list(request):
    resp = {}
    if request.method == 'GET':

        # req = json.loads(str(request.body, encoding='utf-8'))

        # user = req['user_id']
        obj_list = Projects.objects.all()
        list = []
        for prj in obj_list:
            transactions = Transaction.objects.filter(project_id=prj.id)
            have_sum = sum([transaction.sum for transaction in transactions])
            author_username = User.objects.get(id=prj.author_id.id).username
            prj_attrs = {
                'author_username': author_username,
                'title': prj.title,
                'sum': prj.sum,
                'have_sum': have_sum,
                'deadline': prj.deadline,
                'project_id': prj.id
            }
            list.append(prj_attrs)
        resp['list'] = list
        # resp['username'] = user.username
    return JsonResponse(resp)

@csrf_protect
def project_exact(request):
    resp = {}
    if request.method == 'POST':
        req = json.loads(str(request.body, encoding='utf-8'))
        project = Projects.objects.get(id=int(req['project_id']))
        deadline = project.deadline
        sum = project.sum
        title = project.title
        promise = project.promise
        tags = project.tags
        resp = {
            'deadline': deadline,
            'sum': sum,
            'title': title,
            'promise': promise,
            'tags': tags
        }
    return JsonResponse(resp)

@csrf_protect
def profile(request):
    resp = {}
    if request.method == 'POST':
        req = json.loads(request.body)
        user_id = int(req['user_id'])
        user = User.objects.get(id=user_id)
        queryset_project = Projects.objects.all().filter(id=user_id)
        proj_list = []
        for q in queryset_project:
            proj = {}
            proj['title'] = q.title
            proj['sum'] = q.sum
            proj_transactions = Transaction.objects.all().filter(project_id=q.id)
            have_sum = 0
            for p in proj_transactions:
                have_sum += p.sum
            proj['have_sum'] = have_sum
            proj_list.append(proj)
        resp = {}
        resp['username'] = user.username
        resp['list'] = proj_list
    return JsonResponse(resp)



class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
