<script>
var ctx = document.getElementById("myChart").getContext('2d');
var ctx2 = document.getElementById("myChart2").getContext('2d');
var endpoint = '/tp'
var defaultdata = []
function worker(){
    $.ajax({
        method: "GET",
        url: endpoint,
        success: function(resp){
            defaultdata = resp
            console.log(defaultdata)
            render_chart_bar(defaultdata)
        },
        complete: function() {
            // Schedule the next request when the current one's complete
            setTimeout(worker, 5000)
        }
    });
}
worker()

function lineworker(){
    $.ajax({
        method: "GET",
        url: '/ld',
        success: function(resp){
            defaultdata = resp.linedata
            labels = resp.labels
            render_chart_line(labels, defaultdata)
        },
        complete: function() {
            // Schedule the next request when the current one's complete
            setTimeout(lineworker, 2000)
        }
    });
}
lineworker()

function render_chart_bar(defaultdata)
{
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Mon", "Tue", "Wen", ],
        datasets: [{
            label: 'Temperture',
            data: defaultdata,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

function render_chart_line(lables, defaultdata)
{
    var config = {
       type: 'line',
       data: {
           labels: lables,
           datasets: [{
               label: "My First dataset",
               backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],

               borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],

               data: defaultdata,
               fill: false,
           },]
       },
       options: {
           responsive: true,
           title:{
               display:true,
               text:'Chart.js Line Chart'
           },
           tooltips: {
               mode: 'index',
               intersect: false,
           },
           hover: {
               animationDuration: 0,
           },
           animation: {
               duration: 0,
           },
           scales: {
               xAxes: [{
                   display: true,
                   scaleLabel: {
                       display: true,
                       labelString: 'Month'
                   }
               }],
               yAxes: [{
                   display: true,
                   scaleLabel: {
                       display: true,
                       labelString: 'Value'
                   }
               }]
           }
       }
    };
    var line = new Chart(ctx2, config)
}
</script>
