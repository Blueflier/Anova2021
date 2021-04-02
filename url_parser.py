"""
Author: Hannah Kim
Date: Tuesday, March 20th, 2021
Purpose: Returns the score of a website url based on the extension
"""
from urllib.parse import urlparse

url = 'https://www.npr.org/sections/news/'
url_domain = urlparse(url).netloc
print(domain)

extension_dict = {
    ".com": 10,
    ".edu": 80,
    ".gov": 100,
    ".org": 69,
    ".us": 40
}

def score(url_domain):
    for x in extension_dict:
        if x in url_domain:
            # print(x)
            # print("score is:", extension_dict[x])
            return extension_dict[x]

score(url_domain)
