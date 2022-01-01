from django.shortcuts import render
import requests

def landingPage(request):
    
        # response = requests.get('https://app.asana.com/api/1.0/user_task_lists/1201595396144022/tasks?opt_fields=name,created_at,completed,descriptions',headers = {'Authorization': 'Bearer 1/1201595394521739:35c0953ed323faee95235e7885dbfdf3'}).json()
        # return render(request, 'landingPage/index.html',{'response':response['data']})

        url = "https://app.asana.com/api/1.0/projects/1201609953361720/tasks"

        querystring = {"opt_fields":"name,created_at,completed,descriptions"}

        headers = {
            'accept': "application/json",
            'authorization': "Bearer 1/1201595394521739:35c0953ed323faee95235e7885dbfdf3",
            'cache-control': "no-cache",
            'postman-token': "40d3bf43-bdbb-7abb-79ee-b8821a8b61ae"
            }

        response = requests.request("GET", url, headers=headers, params=querystring).json()

        return render(request, 'landingPage/index.html',{'response':response['data']})
