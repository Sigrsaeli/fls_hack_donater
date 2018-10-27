import json

from django.db.models import Model
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render

# Create your views here.
from donater.models import Projects


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
        summ = req['sum']
        tags = req['tags']
        promise = req['promise']
        proj = Projects(user_id=user_id, title=title,
                        description=desc, attachment=attach,
                        sum=summ, tags=tags, promise=promise)
        proj.save()
        # user_id = req['user_id']
        response = {'OK': 200}
    return JsonResponse(response)

