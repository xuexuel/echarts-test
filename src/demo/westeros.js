

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'echarts'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('echarts'));
  } else {
    // Browser globals
    factory({}, root.echarts);
  }
}(this, function (exports, echarts) {
  var log = function (msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg);
    }
  };
  if (!echarts) {
    log('ECharts is not Loaded');
    return;
  }
  echarts.registerTheme('westeros', {
    "color": [
      "#516b91",
      "#59c4e6",
      "#edafda",
      "#93b7e3",
      "#a5e7f0",
      "#cbb0e3"
    ],
    "backgroundColor": "transparent",
    "textStyle": {},
    "title": {
      "textStyle": {
        "color": "#ffffff"
      },
      "subtextStyle": {
        "color": "#ffffff"
      }
    },
    "line": {
      "itemStyle": {
        "borderWidth": "2"
      },
      "lineStyle": {
        "width": "2"
      },
      "symbolSize": "6",
      "symbol": "emptyCircle",
      "smooth": true
    },
    "radar": {
      "itemStyle": {
        "borderWidth": "2"
      },
      "lineStyle": {
        "width": "2"
      },
      "symbolSize": "6",
      "symbol": "emptyCircle",
      "smooth": true
    },
    "bar": {
      "itemStyle": {
        "barBorderWidth": 0,
        "barBorderColor": "#ffffff"
      }
    },
    "pie": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ffffff"
      }
    },
    "scatter": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ffffff"
      }
    },
    "boxplot": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ffffff"
      }
    },
    "parallel": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ffffff"
      }
    },
    "sankey": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ffffff"
      }
    },
    "funnel": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ffffff"
      }
    },
    "gauge": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ffffff"
      }
    },
    "candlestick": {
      "itemStyle": {
        "color": "#edafda",
        "color0": "transparent",
        "borderColor": "#d680bc",
        "borderColor0": "#8fd3e8",
        "borderWidth": "2"
      }
    },
    "graph": {
      "itemStyle": {
        "borderWidth": 0,
        "borderColor": "#ffffff"
      },
      "lineStyle": {
        "width": 1,
        "color": "#ffffff"
      },
      "symbolSize": "6",
      "symbol": "emptyCircle",
      "smooth": true,
      "color": [
        "#516b91",
        "#59c4e6",
        "#edafda",
        "#93b7e3",
        "#a5e7f0",
        "#cbb0e3"
      ],
      "label": {
        "color": "#ffffff"
      }
    },
    "map": {
      "itemStyle": {
        "normal": {
          "areaColor": "#f3f3f3",
          "borderColor": "#516b91",
          "borderWidth": 0.5
        },
        "emphasis": {
          "areaColor": "#a5e7f0",
          "borderColor": "#516b91",
          "borderWidth": 1
        }
      },
      "label": {
        "normal": {
          "textStyle": {
            "color": "#000"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "#516b91"
          }
        }
      }
    },
    "geo": {
      "itemStyle": {
        "normal": {
          "areaColor": "#f3f3f3",
          "borderColor": "#516b91",
          "borderWidth": 0.5
        },
        "emphasis": {
          "areaColor": "#a5e7f0",
          "borderColor": "#516b91",
          "borderWidth": 1
        }
      },
      "label": {
        "normal": {
          "textStyle": {
            "color": "#000"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "#516b91"
          }
        }
      }
    },
    "categoryAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#ffffff"
        }
      },
      "axisTick": {
        "show": true,
        "lineStyle": {
          "color": "#ffffff"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#ffffff"
        }
      },
      "splitLine": {
        "show": false,
        "lineStyle": {
          "color": [
            "#ffffff"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.05)",
            "rgba(200,200,200,0.02)"
          ]
        }
      }
    },
    "valueAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#ffffff"
        }
      },
      "axisTick": {
        "show": true,
        "lineStyle": {
          "color": "#ffffff"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#ffffff"
        }
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": [
            "#888888"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.05)",
            "rgba(200,200,200,0.02)"
          ]
        }
      }
    },
    "logAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#ffffff"
        }
      },
      "axisTick": {
        "show": true,
        "lineStyle": {
          "color": "#ffffff"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#ffffff"
        }
      },
      "splitLine": {
        "show": false,
        "lineStyle": {
          "color": [
            "#ffffff"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.05)",
            "rgba(200,200,200,0.02)"
          ]
        }
      }
    },
    "timeAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#ffffff"
        }
      },
      "axisTick": {
        "show": true,
        "lineStyle": {
          "color": "#ffffff"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#ffffff"
        }
      },
      "splitLine": {
        "show": false,
        "lineStyle": {
          "color": [
            "#ffffff"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.05)",
            "rgba(200,200,200,0.02)"
          ]
        }
      }
    },
    "toolbox": {
      "iconStyle": {
        "normal": {
          "borderColor": "#ffffff"
        },
        "emphasis": {
          "borderColor": "#ffffff"
        }
      }
    },
    "legend": {
      "textStyle": {
        "color": "#ffffff"
      }
    },
    "tooltip": {
      "axisPointer": {
        "lineStyle": {
          "color": "#ffffff",
          "width": 1
        },
        "crossStyle": {
          "color": "#ffffff",
          "width": 1
        }
      }
    },
    "timeline": {
      "lineStyle": {
        "color": "#8fd3e8",
        "width": 1
      },
      "itemStyle": {
        "normal": {
          "color": "#8fd3e8",
          "borderWidth": 1
        },
        "emphasis": {
          "color": "#8fd3e8"
        }
      },
      "controlStyle": {
        "normal": {
          "color": "#8fd3e8",
          "borderColor": "#8fd3e8",
          "borderWidth": 0.5
        },
        "emphasis": {
          "color": "#8fd3e8",
          "borderColor": "#8fd3e8",
          "borderWidth": 0.5
        }
      },
      "checkpointStyle": {
        "color": "#8fd3e8",
        "borderColor": "#8a7ca8"
      },
      "label": {
        "normal": {
          "textStyle": {
            "color": "#8fd3e8"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "#8fd3e8"
          }
        }
      }
    },
    "visualMap": {
      "color": [
        "#516b91",
        "#59c4e6",
        "#a5e7f0"
      ]
    },
    "dataZoom": {
      "backgroundColor": "rgba(0,0,0,0)",
      "dataBackgroundColor": "rgba(255,255,255,0.3)",
      "fillerColor": "rgba(167,183,204,0.4)",
      "handleColor": "#a7b7cc",
      "handleSize": "100%",
      "textStyle": {
        "color": "#ffffff"
      }
    },
    "markPoint": {
      "label": {
        "color": "#ffffff"
      },
      "emphasis": {
        "label": {
          "color": "#ffffff"
        }
      }
    }
  });
}));


