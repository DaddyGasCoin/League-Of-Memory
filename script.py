from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
from pathlib import Path
import urllib.request


site = 'https://www.leagueoflegends.com/en-gb/champions/'
req = Request(site, headers={'User-Agent': 'Mozilla/5.0'})
html = urlopen(req).read() #open webpage
bs = BeautifulSoup(html, 'html.parser')
images_box = bs.find('div', attrs={'class': 'style__List-sc-13btjky-2 dLJiol'})
imgsurl = []
for link in images_box.findAll("img"):
    imgsurl.append(link.get('src'))

Champnames = bs.findAll("span", {"class": "style__Text-n3ovyt-3 gMLOLF"})
champlist = []
for x in Champnames:
    champlist.append(x.text)

filterlist = []
for x in imgsurl:
    if(x in filterlist):
        pass
    else:
        filterlist.append(x)

count = 0
for img in filterlist:
    filename = champlist[count]+".jpg"
    print(f'downloading{champlist[count]} from {img}')
    urllib.request.urlretrieve(img,filename)  
    count +=1   

