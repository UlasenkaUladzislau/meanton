from django.contrib.auth.models import User
from django.contrib.auth import login
from django.shortcuts import render, redirect

from .forms import LoginForm


def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user, created = User.objects.get_or_create(username=username)
            if not created:
                if not user.check_password(password):
                    message = 'Username or password is incorrect'
                    return render(request, 'login.html', {'form': form, 'message': message})
                login(request, user)
                return redirect('index')
            else:
                user.set_password(password)
                user.save()
                login(request, user)
                return redirect('index')
    else:
        form = LoginForm()
        return render(request, 'login.html', {'form': form})


def index_view(request):
    if request.user.is_authenticated():
        return render(request, 'index.html')
    else:
        return redirect('login')
