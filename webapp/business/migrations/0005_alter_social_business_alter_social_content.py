# Generated by Django 4.1.7 on 2023-03-10 08:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("business", "0004_alter_business_email"),
    ]

    operations = [
        migrations.AlterField(
            model_name="social",
            name="business",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="socials",
                to="business.business",
            ),
        ),
        migrations.AlterField(
            model_name="social",
            name="content",
            field=models.CharField(max_length=255),
        ),
    ]
