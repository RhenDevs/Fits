
const userStatsCtx = document.getElementById('userStatsChart').getContext('2d');
const trafficSourcesCtx = document.getElementById('trafficSourcesChart').getContext('2d');
const performanceMetricsCtx = document.getElementById('performanceMetricsChart').getContext('2d');

new Chart(userStatsCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Active Users',
            data: [50, 100, 150, 200, 250, 300],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
});

new Chart(trafficSourcesCtx, {
    type: 'doughnut',
    data: {
        labels: ['Organic', 'Direct', 'Referral', 'Social'],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: ['#4CAF50', '#FFC107', '#2196F3', '#FF5722']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
});

new Chart(performanceMetricsCtx, {
    type: 'bar',
    data: {
        labels: ['Metric A', 'Metric B', 'Metric C', 'Metric D'],
        datasets: [{
            label: 'Performance',
            data: [75, 50, 90, 60],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
});
