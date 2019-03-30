from __future__ import unicode_literals

from django.shortcuts import render


from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth.models import Group,User
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView,RetrieveAPIView
from utility.models import*
from utility.serializers import*
import random

class GenderListView(APIView):

	def get(self,request):

		genders = Gender.objects.all()
		serializer = GenderSerializer(genders,many=True)
		return Response({'status': 'SUCCESS', 'list': serializer.data})


class RegionListView(APIView):

	def get(self,request):

		regions = Region.objects.all()
		serializer = RegionSerializer(regions,many=True)
		return Response({'status': 'SUCCESS', 'list': serializer.data})


def send_code(request):

	code = random.randint(1000,10000)

	email = 'jatin.iiita@gmail.com'

	msg = 'Your Verification Code for React DJ is ' + '\'' + str(code) + '\'' + '. Please use this verification code for registration.\n\n' + 'NOTE: This is a system generated e-mail and please do not reply.\n\n' + 'Regards, \n' + 'Team React DJ'
	
	email_msg = EmailMessage('React DJ : Verification Code',msg,to=[email])

	try :
		email_msg.send()
		print("SUCCESS")
		return Response({'status': 'SUCCESS'})

	except Exception as e:
		print(e)
		return Response({'status': 'REQUEST FAILURE'})



def verify_code(request):

	code = '1452'

	email = 'jatin.iiita@gmail.com'

	verification = EmailVerification.objects.filter(email=email,code=code)

	if verification.exists() :
		return Response({'status': 'SUCCESS'})

	else:
		print(e)
		return Response({'status': 'VERIFICATION FAILURE'})