
// *chartL1折线图
{
  const source = [
    ['年', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    ['收入', 820, 932, 901, 934, 1290, 1330, 1520],
    ['支出', 200, 632, 601, 634, 850, 1000, 1100]
  ]
  const chart = echarts.init(document.querySelector('#chartL1'), 'westeros');
  const option = {
    title: {
      text: 'xx市人民收入增长情况',
      left: 'center'
    },
    tooltip: {},
    dataset: { source },
    xAxis: {
      type: 'category',
      axisLabel: {
        rotate: 30
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      { type: 'line', seriesLayoutBy: 'row' },
      { type: 'line', seriesLayoutBy: 'row' },
    ]
  }
  chart.setOption(option);
}
// *chartL2饼图
{
  const source = [
    { value: 5000, name: '旅游' },
    { value: 4500, name: '饮食' },
    { value: 6500, name: '服装' },
    { value: 3500, name: '电影' },
    { value: 2500, name: '其他' },
  ]
  const chart = echarts.init(document.querySelector('#chartL2'), 'westeros');
  const option = {
    title: {
      text: 'xx市人民衣食住行支出比',
      left: 'center'
    },
    grid: {},
    dataset: { source },
    tooltip: {
      formatter: ({ percent }) => {
        return Math.round(percent);
      }
    },
    series: {
      type: 'pie',
      center: ['50%', '55%'],
      roseType: 'radius',
      radius: ['30%', '70%']
    },

  }
  chart.setOption(option);
}

// *chartL3散点图
{
  const dimensions = ['收入', '年龄', '人口', '住址', '时间'];
  const chart = echarts.init(document.querySelector('#chartL3'), 'westeros');
  const option = {
    title: {
      text: 'xx市人民收入和年龄关系',
      left: 'center'
    },
    tooltip: [0, 1],
    xAxis: {
      name: '年龄',
      type: 'value',
      axisLabel: {
        rotate: 30
      }
    },
    yAxis: {
      name: '收入',
      type: 'value'
    },
    dataset: {
      dimensions
    },
    series: {
      type: 'scatter',
      symbolSize: 5,
      encode: {
        x: 1,
        y: 0,

      },
      itemStyle: {
        // opacity:0.4
      }
    }
  }
  fetch('../../static/table.json')
    .then((res) => res.json())
    .then(data => {
      option.dataset.source = data;
      chart.setOption(option);
    })
}

// *chartR1雷达图
{
  const data = [
    {
      name: '预算分配',
      value: [43000, 45000, 42000, 45000, 40000, 49000]
    },
    {
      name: '实际开销',
      value: [30000, 34000, 55000, 35000, 32000, 31000]
    }
  ]
  const indicator = [
    { name: '管理', min: 0, max: 60000 },
    { name: '信息技术', min: 0, max: 60000 },
    { name: '客服', min: 0, max: 60000 },
    { name: '研发', min: 0, max: 60000 },
    { name: '市场', min: 0, max: 60000 },
  ]
  const chart = echarts.init(document.querySelector('#chartR1'), 'westeros');
  const option = {
    title: {
      text: 'xx市财务开销',
      left: 'center'
    },
    legend: {
      data: ['预算分配', '实际开销'],
      left: 0, top: 40,
      orient: ''
    },
    tooltip: {},
    radar: {
      indicator
    },
    series: {
      type: 'radar',
      data
    }
  }
  chart.setOption(option);
}

// *chartR2 柱状图
{
  const source = [
    ['时间', '小麦', '玉米', '高粱'],
    [2017, 1000, 800, 900],
    [2018, 500, 650, 800],
    [2019, 800, 900, 1200]
  ]
  const chart = echarts.init(document.querySelector('#chartR2'), 'westeros');
  const option = {
    title: {
      text: 'xx市农作物收成',
      left: 'center'
    },
    tooltip: {},
    legend: {
      top: 30,
    },
    grid: {
      top: 72,
      bottom: 28
    },
    dataset: { source },
    xAxis: {
      type: 'category',
      axisLabel: {
        rotate: 30
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      { type: 'bar', id: 'xm' },
      { type: 'bar', id: 'ym' },
      { type: 'bar', id: 'gl' },
    ]
  }
  chart.setOption(option);
  const imgXm = new Image();
  imgXm.src = '../../images/xm.png';
  const imgYm = new Image();
  imgYm.src = '../../images/ym.png';
  const imgGl = new Image();
  imgGl.src = '../../images/gl.png';
  Promise.all([imgPro(imgXm), imgPro(imgYm), imgPro(imgGl)]).then(() => {
    chart.setOption({
      series: [
        {
          id: 'xm',
          color: {
            image: imgXm
          }
        },
        {
          id: 'ym',
          color: {
            image: imgYm
          }
        }, {
          id: 'gl',
          color: {
            image: imgGl
          }
        }
      ]
    })
  })
  function imgPro(img) {
    return new Promise((resolve) => {
      img.onload = function () {
        resolve(img);
      }
    })
  }
}
// *chartR3折线图
{
  const source = [
    ['年', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    ['收入', 820, 932, 901, 934, 1290, 1330, 1520],
    ['支出', 200, 632, 601, 634, 850, 1000, 1100]
  ]
  const chart = echarts.init(document.querySelector('#chartR3'), 'westeros');
  const option = {
    title: {
      text: 'xx市人民支出增长情况',
      left: 'center'
    },
    tooltip:{},
    dataset: { source },
    xAxis: {
      type: 'category',
      axisLabel: {
        rotate: 30
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      { type: 'line', seriesLayoutBy: 'row' },
      { type: 'line', seriesLayoutBy: 'row' },
    ]
  }
  chart.setOption(option);
}
// *chartC 地图
{
  const chart = echarts.init(document.querySelector('#chartC'), 'westeros');
  fetch('../../static/map-china.json')
    .then(res => res.json())
    .then(data => {
      echarts.registerMap('china', data);
      const option = {
        title: {
          text: '中国地图',
          left: 'center',
          textStyle: {
            color: 'rgba(255,255,255,0.8)'
          },
        },
        geo: {
          map: 'china',
          itemStyle: {
            areaColor: 'rgba(0,29,132,0.8)',
            boderColor: '#02c0ff'
          },
          emphasis: {
            itemStyle: {
              shadowColor: '#000',
              shadowOffsetY: 20,
              shadowBlur: 20
            },
            label: {
              color: 'red'
            }
          }
        },
        series: {
          name: 'pm2.5',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: [
            {
              name: '海门',
              value: [121.15, 31.89, 9]
            },
            {
              name: '鄂尔多斯',
              value: [109.781327, 39.608266, 12]
            },
            {
              name: '招远',
              value: [120.38, 37.35, 18]
            }
          ],
          symbolSize: function (val) {
            return val[2];
          }
        }
      }
      chart.setOption(option);
    })
}