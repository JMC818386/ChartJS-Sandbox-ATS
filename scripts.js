var canvasElement = document.getElementById("stepChart");

var config = {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Average Daily Steps",
        data: [1000, 1500, 1800, 2000, 2100, 2150],
        backgroundColor: "#FC841B", // Change bar color here
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      afterDraw: function (chart) {
        var ctx = chart.ctx;
        chart.data.datasets.forEach(function (dataset, datasetIndex) {
          var meta = chart.getDatasetMeta(datasetIndex);
          if (!meta.hidden) {
            meta.data.forEach(function (bar, index) {
              var model = bar._model;
              ctx.save();
              ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
              ctx.shadowOffsetX = 2;
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 5;
              ctx.fillStyle = model.backgroundColor;
              ctx.fillRect(model.x, model.y, model.width, model.height);
              ctx.restore();
            });
          }
        });
      },
    },
  },
};

var cookieChart = new Chart(canvasElement, config);

var mainNavBtns = document.querySelectorAll(".main-nav-btn");
mainNavBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    mainNavBtns.forEach(function (btn) {
      btn.classList.remove("active-btn");
    });
    btn.classList.add("active-btn");
  });
});

