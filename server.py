import falcon
from testdata import RandomData
from index import Index
from datachart import TempertureChart

def launch():
    app = falcon.API()
    temp = RandomData()
    app.add_route('/tp', temp)
    ind  = Index()
    app.add_route('/', ind)
    tempchart = TempertureChart()
    app.add_route('/view/tp', tempchart)
    return app

app = launch()
