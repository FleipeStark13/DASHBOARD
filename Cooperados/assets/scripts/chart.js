const ctx = document.getElementById('myChart');

let chartType = 'bar';
let chart = criarGrafico(chartType);

function criarGrafico(tipe) {
    return new Chart(ctx, {
        type: tipe,
        data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Março', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          datasets: [{
            label: '"R$" Economizados',
            data: [2000, 1000, 3200, 5000, 2000, 1350, 200, 3256, 3200, 2560, 2590, 3200],
            borderWidth: 1,
            borderColor: '#287c1d',
            backgroundColor: '#2ab119'
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
    });
}

function changeChart(type) {
    const bar = document.getElementById('bar')
    const line = document.getElementById('line')
    if(type === 'bar') {
        bar.style.backgroundColor = '#13A338'
        bar.style.color = '#B4EE16'
        line.style.color = '#cecece'
        line.style.backgroundColor = '#FFF'
    } else if (type === 'line') {
        bar.style.backgroundColor = '#FFF'
        line.style.backgroundColor = '#13A338'
        bar.style.color = '#cecece'
        line.style.color = '#B4EE16'
    }

    chart.destroy()
    chart = criarGrafico(type)
}