
const userStatsCtx = document.getElementById('userStatsChart').getContext('2d');
const trafficSourcesCtx = document.getElementById('trafficSourcesChart').getContext('2d');
const performanceMetricsCtx = document.getElementById('performanceMetricsChart').getContext('2d');

new Chart(userStatsCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Active Users',
            data: [140, 555, 32, 43, 643, 876],
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
    type: 'pie',
    data: {
        labels: ['Organic', 'Direct', 'Referral', 'Social'],
        datasets: [{
            data: [54, 76, 87, 76],
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
            backgroundColor: 'rgba(2, 77, 27, 0.2)',
            borderColor: 'rgb(33, 37, 77)',
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
