import json

from django.contrib.auth.models import User
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render

# Create your views here.
from donater.models import Projects, Transaction


def main(request):
    return HttpResponse('Hello')


# NOT TESTED
def create_project(request):
    response = {'NOT OK': 404}
    if request.method == 'POST':
        req = json.load(request.body)
        user_id = int(req['user_id'])
        title = req['title']
        desc = req['description']
        attach = ''
        if req['attachment']:
            attach = req['attachment']
        summ = int(req['sum'])
        tags = req['tags']
        promise = req['promise']
        proj = Projects(user_id=user_id, title=title,
                        description=desc, attachment=attach,
                        sum=summ, tags=tags, promise=promise)
        proj.save()
        # user_id = req['user_id']
        response = {'OK': 200}
    return JsonResponse(response)


# NOT TESTED
def send_transaction(request):
    response = {'NOT OK': 404}
    if request.method == 'POST':
        req = json.load(request.body)
        user_id = int(req['user_id'])
        project_id = int(req['project_id'])
        tr = Transaction(user_id=user_id, project_id=project_id)
        tr.save()
        response = {'OK': 200}
    return JsonResponse(response)

# NOT TESTED
def project_list(request):
    resp = {'NOT OK': 404}
    if request.method == 'GET':
        req = json.load(request.body)
        user = req['user_id']
        obj_list = Projects.objects.all()
        list = []
        for prj in obj_list:
            transactions = Transaction.objects.filter(project_id=prj.id)
            have_sum = sum([transaction.sum for transaction in transactions])
            author_username = User.objects.get(id=prj.author_id).username
            prj_attrs = {
                'author_username': author_username,
                'title': prj.title,
                'sum': prj.sum,
                'have_sum': have_sum,
                'deadline': prj.deadline
            }
            list.append(prj_attrs)
        resp['list'] = list
        resp['username'] = user.username
    return JsonResponse(resp)

# TODO:
def project_exact(request):
    resp = {'NOT OK': 404}
    if request.method == 'GET':
        req = json.load(request)
        project = Projects.objects.get(id__exact=req['project_id'])
        deadline = project.deadline
        project.sum
        project.title
        project.promise
        project.tags
        resp = {}
    return project


# NOT TESTED
def profile(request):
    resp = {'NOT OK': 404}
    if request.method == 'GET':
        req = json.load(request.body)
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
