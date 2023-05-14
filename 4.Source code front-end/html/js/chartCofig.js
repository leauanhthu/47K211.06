const charData = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [100, 60, 70, 40, 50],
            backgroundColor: [
                'rgba(153, 102, 255)',
                'rgba(255, 206, 86)',
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(75, 192, 192)',
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
            ],
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom',
                fullSize: false,
                align: 'start',
                labels: {
                    padding: 10,
                    usePointStyle: true,
                    pointSytle: 'circle'
                }
            }
        },
    }
};
const data = [
    { x: 'Jan', income: 3},
    { x: 'Feb', income: 6 },
    { x: 'Mar', income: 8 },
    { x: 'Apr', income: 7.8},
    { x: 'May', income: 2},
    { x: 'Jun', income: 0},
    { x: 'Jul', income: 0},
    { x: 'Aug', income: 0},
    { x: 'Sep', income: 0},
    { x: 'Oct', income: 0},
    { x: 'Nov', income: 0},
    { x: 'Dec', income: 0},
];

const secondcharData = {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'income',
            borderRadius: 9,
            data: data,
            backgroundColor: '#FF7A00',
            maxBarThickness: 9,
            parsing: {
                yAxisKey: 'income'
            },
        },
        {
            label: 'expenses ',
            borderRadius: 5,
            maxBarThickness: 5,
            data: data,
            backgroundColor: '#6F52ED',
            parsing: {
                yAxisKey: 'expenses'
            },
        },
        ]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            y: {
                beginAtZero: true,
                max: 10
            },
            x: {
                grid: {
                    display: false
                }
            },
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};
const ctx = document.getElementById('myChart');
const second = document.getElementById('secondChart');
const myChart = new Chart(ctx, charData);
const secondChart = new Chart(second, secondcharData);
myChart;
secondChart;
