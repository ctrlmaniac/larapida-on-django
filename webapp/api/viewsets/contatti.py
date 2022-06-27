from smtplib import SMTPException

from django import forms
from django.conf import settings
from django.core.exceptions import ValidationError
from django.core.mail import send_mail
from django.http.response import BadHeaderError
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView


class ContattiView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, format=None):
        return Response(None)

    def post(self, request, format=None):
        f = forms.EmailField()
        email = request.data.get("email")
        messaggio = request.data.get("messaggio")

        try:
            f.clean(email)
        except ValidationError:
            return Response("Email non valida", status=status.HTTP_400_BAD_REQUEST)

        try:
            send_mail(
                "Messaggio dal sito Internet",
                messaggio,
                settings.DEFAULT_FROM_EMAIL,
                [settings.DEFAULT_FROM_EMAIL, email],
                fail_silently=False,
            )
        except BadHeaderError:
            return Response("Header invalido", status=status.HTTP_400_BAD_REQUEST)
        except SMTPException as e:
            return Response(f"Errore {e}", status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response("Email non inviata", status=status.HTTP_400_BAD_REQUEST)

        return Response("email inviata", status=status.HTTP_200_OK)
