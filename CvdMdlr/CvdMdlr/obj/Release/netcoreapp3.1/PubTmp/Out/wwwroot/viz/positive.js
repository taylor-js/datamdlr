var posjson = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "background": "#fff",
  "padding": {
    "top": 10,
    "right": 10,
    "bottom": 10,
    "left": 10
  },
  "width": 200,
  "height": 200,
  "title": {
    "anchor": "start",
    "text": "Tested Positive"
  },
  "style": "cell",
  "data": [
    {
      "name": "source_0",
      "url": "https://covidtracking.com/api/us/daily",
      "format": {
        "type": "json",
        "parse": {
          "dateChecked": "date"
        }
      },
      "transform": [
        {
          "type": "filter",
          "expr": "isValid(datum[\"positive\"]) && isFinite(+datum[\"positive\"]) && (isDate(datum[\"dateChecked\"]) || (isValid(datum[\"dateChecked\"]) && isFinite(+datum[\"dateChecked\"])))"
        }
      ]
    }
  ],
  "marks": [
    {
      "name": "marks",
      "type": "rect",
      "style": [
        "bar"
      ],
      "from": {
        "data": "source_0"
      },
      "encode": {
        "update": {
          "tooltip": {
            "signal": "{\"positive\": format(datum[\"positive\"], \"\"), \"dateChecked\": timeFormat(datum[\"dateChecked\"], '%b %d, %Y')}"
          },
          "fill": {
            "value": "#4c78a8"
          },
          "xc": {
            "scale": "x",
            "field": "dateChecked"
          },
          "width": {
            "value": 20
          },
          "y": {
            "scale": "y",
            "field": "positive"
          },
          "y2": {
            "scale": "y",
            "value": 0
          }
        }
      }
    }
  ],
  "scales": [
    {
      "name": "x",
      "type": "time",
      "domain": {
        "data": "source_0",
        "field": "dateChecked"
      },
      "range": [
        0,
        {
          "signal": "width"
        }
      ],
      "padding": 5
    },
    {
      "name": "y",
      "type": "linear",
      "domain": {
        "data": "source_0",
        "field": "positive"
      },
      "range": [
        {
          "signal": "height"
        },
        0
      ],
      "nice": true,
      "zero": true
    }
  ],
  "axes": [
    {
      "scale": "x",
      "orient": "bottom",
      "gridScale": "y",
      "grid": true,
      "tickCount": {
        "signal": "ceil(width/40)"
      },
      "domain": false,
      "labels": false,
      "maxExtent": 0,
      "minExtent": 0,
      "ticks": false,
      "zindex": 0
    },
    {
      "scale": "y",
      "orient": "left",
      "gridScale": "x",
      "grid": true,
      "tickCount": {
        "signal": "ceil(height/40)"
      },
      "domain": false,
      "labels": false,
      "maxExtent": 0,
      "minExtent": 0,
      "ticks": false,
      "zindex": 0
    },
    {
      "scale": "x",
      "orient": "bottom",
      "grid": false,
      "title": "dateChecked",
      "labelFlush": true,
      "labelOverlap": true,
      "tickCount": {
        "signal": "ceil(width/40)"
      },
      "zindex": 0
    },
    {
      "scale": "y",
      "orient": "left",
      "grid": false,
      "title": "positive",
      "labelOverlap": true,
      "tickCount": {
        "signal": "ceil(height/40)"
      },
      "zindex": 0
    }
  ],
  "config": {
    "style": {
      "guide-label": {
        "font": "Arial, sans-serif",
        "fontSize": 12
      },
      "guide-title": {
        "font": "Arial, sans-serif",
        "fontSize": 12
      },
      "group-title": {
        "font": "Arial, sans-serif",
        "fontSize": 14,
        "fontWeight": "bold",
        "dy": -3
      },
      "arc": {
        "fill": "#3366CC"
      },
      "area": {
        "fill": "#3366CC"
      },
      "rect": {
        "fill": "#3366CC"
      },
      "circle": {
        "fill": "#3366CC"
      }
    },
    "path": {
      "stroke": "#3366CC"
    },
    "shape": {
      "stroke": "#3366CC"
    },
    "symbol": {
      "stroke": "#3366CC"
    },
    "axis": {
      "gridColor": "#ccc",
      "tickColor": "#ccc",
      "domain": false,
      "grid": true
    },
    "range": {
      "category": [
        "#4285F4",
        "#DB4437",
        "#F4B400",
        "#0F9D58",
        "#AB47BC",
        "#00ACC1",
        "#FF7043",
        "#9E9D24",
        "#5C6BC0",
        "#F06292",
        "#00796B",
        "#C2185B"
      ],
      "heatmap": [
        "#c6dafc",
        "#5e97f6",
        "#2a56c6"
      ]
    }
  }
}