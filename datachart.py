from jinja2 import Environment, PackageLoader

env = Environment(
        loader=PackageLoader('chartjs', 'templates'))


class TempertureChart(object):
    def on_get(self, req, resp):
        template = env.get_template("temperture.html")
        resp.content_type = 'text/html'
        resp.body = template.render()

class LineDataChart(object):
    def on_get(self, req, resp):
        template = env.get_template("temperture.html")
        resp.content_type = 'text/html'
        resp.body = template.render()

