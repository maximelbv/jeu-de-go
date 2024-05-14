import requests
from bs4 import BeautifulSoup

url = 'https://homepages.cwi.nl/~aeb/go/games/games/Agon/index.html'
request = requests.get(url)

soup = BeautifulSoup(request.content, 'html5lib')
table = soup.find("table")
links = table.find_all("a")
filesUrls = []
sgfPath = 'https://homepages.cwi.nl/~aeb/go/games/games/Agon/'

for i, link in enumerate(links):
    fileUrl = sgfPath + str(link.get('href'))
    if fileUrl.endswith('.sgf'):
        filesUrls.append(fileUrl)

for x, file in enumerate(filesUrls):
    r = requests.get(file)
    open('test' + str(x) + '.txt', 'wb').write(r.content)