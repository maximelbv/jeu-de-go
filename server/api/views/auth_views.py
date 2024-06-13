from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('register_success') # rediriger vers une vue de succès ou profil ou page de connexion (à voir)
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})

def authentification(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            return redirect('profil') # redirige vers la vue profil à créer plus tard
    else:
        form = AuthenticationForm()
    return render(request, 'authentification.html', {'form': form})
