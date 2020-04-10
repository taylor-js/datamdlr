var negjson = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "description": "A simple bar chart with embedded data.",
  "autosize": {
    "type": "fit-x",
    "contains": "padding"
  },
  "background": "white",
  "padding": 5,
    "height": 200, "width": 400,
"title": {
    "text": "Negative",
    "frame": "group"
},
  "style": "cell",
  "data": [
    {
      "name": "source_0",
      "url": "https://covidtracking.com/api/us/daily.json",
      "format": {
        "type": "json",
        "parse": {
          "dateChecked": "date"
        }
      }
    }
  ],
  "signals": [
    {
      "name": "width",
      "init": "isFinite(containerSize()[0]) ? containerSize()[0] : 200",
      "on": [
        {
          "update": "isFinite(containerSize()[0]) ? containerSize()[0] : 200",
          "events": "window:resize"
        }
      ]
    }
  ],
  "marks": [
    {
      "name": "marks",
      "type": "area",
      "style": [
        "area"
      ],
      "sort": {
        "field": "datum[\"dateChecked\"]"
      },
      "from": {
        "data": "source_0"
      },
      "encode": {
        "update": {
          "orient": {
            "value": "vertical"
          },
          "tooltip": {
            "signal": "{\"dateChecked\": timeFormat(datum[\"dateChecked\"], '%b %d, %Y'), \"negative\": format(datum[\"negative\"], \"\")}"
          },
          "fill": {
            "value": "#4c78a8"
          },
          "x": {
            "scale": "x",
            "field": "dateChecked"
          },
          "y": {
            "scale": "y",
            "field": "negative"
          },
          "y2": {
            "scale": "y",
            "value": 0
          },
          "defined": {
            "signal": "isValid(datum[\"dateChecked\"]) && isFinite(+datum[\"dateChecked\"]) && isValid(datum[\"negative\"]) && isFinite(+datum[\"negative\"])"
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
      ]
    },
    {
      "name": "y",
      "type": "linear",
      "domain": {
        "data": "source_0",
        "field": "negative"
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
      "title": "negative",
      "labelOverlap": true,
      "tickCount": {
        "signal": "ceil(height/40)"
      },
      "zindex": 0
    }
  ],
  "config": {}
}