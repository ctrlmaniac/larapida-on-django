from django.views.generic import TemplateView


class AppView(TemplateView):
    template_name = "www/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context["title"] = "La Rapida Molinetto"
        context[
            "og_image"
        ] = "https://larapidamolinetto.com/static/www/wallpapers/main.jpg"
        context["desciption"] = "ripariamo scarpe e borse, "
        "duplichiamo le chiavi e radiocomandi e tanti altri servizi"

        return context
