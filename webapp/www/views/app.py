from django.views.generic import TemplateView


class AppView(TemplateView):
    template_name = "www/index.html"
