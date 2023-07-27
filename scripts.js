var canvasElement = document.getElementById("stepChart");

var config = {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{ label: "Average Daily Steps", data: [1000, 1500, 1800, 2000, 2100, 2150] }],
  },
};

var cookieChart = new Chart(canvasElement, config);
