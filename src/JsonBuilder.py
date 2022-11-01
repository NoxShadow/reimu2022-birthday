import json
from os import listdir
import random

file = open('assets/PhantomoData/FormRepliesConvertedFinal.json', encoding='UTF-8')
responses = json.load(file)
randomPhantomos = listdir('assets/PhantomosRandom')

phantomos = []
for phantomoReply in responses:

    phantomoType: str = phantomoReply['phantomoType']
    phantomoSource = phantomoReply['phantomoSource']

    if phantomoType == 'Brand new phantomo' or 'Base phantomo' in phantomoType:
        print(phantomoSource)
        phantomoImage = input()
    else:
        phantomoImage = random.choice(randomPhantomos)

    phantomo = {
        "name": phantomoReply['name'],
        "message": phantomoReply['message'],
        "phantomo": phantomoImage,
        "graveType": random.randint(1, 3)
    }
    phantomos.append(phantomo)

with open('assets/PhantomoData/PhantomoReplies.json', 'w', encoding='utf-8') as f:
    json.dump(phantomos, f, ensure_ascii=False)

input('Press enter to exit...')

file.close()