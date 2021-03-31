"""
Author: Hannah Kim
Date: Tuesday, March 20th, 2021
Purpose: Output the domain name of a website url
"""
from urllib.parse import urlparse


url = 'https://stackoverflow.com/questions/46889772/how-to-send-data-from-javascript-to-python'
domain = urlparse(url).netloc
print(domain) # --> www.example.test
