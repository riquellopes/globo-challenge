# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-08-08 12:17
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0006_auto_20160804_1839'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='item',
            options={'ordering': ['level']},
        ),
    ]
