import falcon
from testdata import RandomData, RandomLineData
from index import Index
from datachart import TempertureChart, LineDataChart

def launch():
    app = falcon.API()
    temp = RandomData()
    app.add_route('/tp', temp)
    ld = RandomLineData()
    app.add_route('/ld', ld)
    ind  = Index()
    app.add_route('/', ind)
    tempchart = TempertureChart()
    app.add_route('/view/tp', tempchart)
    ldchart = LineDataChart()
    app.add_route('/view/ld', ldchart)
    return app

app = launch()
