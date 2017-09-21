import falcon
import json
import random

class RandomData(object):
    def on_get(self, req, resp):
        temper = [random.randint(1,40), random.randint(1,40),
                  random.randint(1,40)]
        resp.body = json.dumps(temper)
        resp.status = falcon.HTTP_200
