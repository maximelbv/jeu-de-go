import requests
from bs4 import BeautifulSoup

from .parseSgf import parseSgfFile

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
        filesUrls.append(str(fileUrl))

for x, file in enumerate(filesUrls):
    response = requests.get(file)
    if response.status_code == 200:
        parseSgfFile(response.text)
    else:
        print(f"Failed to retrieve {file}. Status code: {response.status_code}")