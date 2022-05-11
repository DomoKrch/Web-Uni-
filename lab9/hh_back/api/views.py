from django.http import JsonResponse
from . import models
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def get_companies(request):
    if request.method == 'GET':
        companies = list(models.Company.objects.values())
        return JsonResponse(companies, safe=False)

@csrf_exempt
def get_company(request, id):
    if request.method == 'GET':
        company = models.Company.objects.filter(id=id).values()
        return JsonResponse(list(company), safe=False)

@csrf_exempt
def get_company_vacancies(request, id):
    if request.method == 'GET':
        vacancy = models.Vacancy.objects.filter(company_id=id).values()
        return JsonResponse(list(vacancy), safe=False)

@csrf_exempt
def get_vacancies(request):
    if request.method == 'GET':
        vacancies = list(models.Vacancy.objects.values())
        return JsonResponse(vacancies, safe=False)

@csrf_exempt
def get_vacancy(request, id):
    if request.method == 'GET':
        vacancy = models.Vacancy.objects.filter(id=id).values()
        return JsonResponse(list(vacancy), safe=False)

@csrf_exempt
def get_top_ten_vacancies(request):
    if request.method == 'GET':
        companies = list(models.Vacancy.objects.order_by("-salary").values())
        return JsonResponse(companies, safe=False)
