import falcon
import json
import random

class RandomData(object):
    def on_get(self, req, resp):
        temper = [random.randint(1,40), random.randint(1,40),
                  random.randint(1,40)]

        resp.body = json.dumps(temper)
        resp.status = falcon.HTTP_200


class RandomLineData(object):
    def __init__(self):
        self.cur_idx = 0
        self.arr = self.random_array(1000)
        self.data_len = 50

    def random_array(self, arr_len):
        ret = []
        for _ in range(0, arr_len):
            ret.append(random.randint(1,100))
        return ret

    def next_array(self):
        ret = self.arr[self.cur_idx : self.cur_idx + self.data_len]
        self.cur_idx = 0 if self.cur_idx + 1 >= 1000 else \
            self.cur_idx + 1
        return ret
    
    def on_get(self, req, resp):
        linedata = self.next_array()
        data = {'labels': range(1, self.data_len + 1),
                'linedata': linedata}
        resp.body = json.dumps(data)
        resp.status = falcon.HTTP_200
