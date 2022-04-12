from django.http import JsonResponse
from . import models


def list_products(request):
    products = list(models.Product.objects.values())
    return JsonResponse(products, safe=False)


def list_categories(request):
    categories = list(models.Category.objects.values())
    return JsonResponse(categories, safe=False)


def get_product(request, id):
    product = models.Product.objects.filter(id=id).values()
    return JsonResponse(list(product), safe=False)


def get_category(request, id):
    category = models.Category.objects.filter(id=id).values()
    return JsonResponse(list(category), safe=False)


def get_prods_by_categ(request, id):
    if id == 1:
        category = models.Product.objects.filter(categ='headset').values()
    if id == 2:
        category = models.Product.objects.filter(categ='microphone').values()
    if id == 3:
        category = models.Product.objects.filter(categ='speaker').values()
    if id == 4:
        category = models.Product.objects.filter(categ='webcam').values()

    return JsonResponse(list(category), safe=False)
