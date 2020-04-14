var multilog = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "autosize": {
    "type": "fit-x",
    "contains": "padding"
  },
  "background": "white",
    "padding": 5,
    "height": 500,
    "width": "container",

  "title": {
    "text": "Log Scale",
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
      },
      "transform": [
        {
          "type": "aggregate",
          "groupby": [
            "dateChecked"
          ],
          "ops": [
            "mean",
            "mean",
            "mean",
            "mean",
            "mean"
          ],
          "fields": [
            "death",
            "negative",
            "recovered",
            "positive",
            "hospitalized"
          ],
          "as": [
            "mean_death",
            "mean_negative",
            "mean_recovered",
            "mean_positive",
            "mean_hospitalized"
          ]
        }
      ]
    },
    {
      "name": "data_1",
      "source": "source_0",
      "transform": [
        {
          "type": "filter",
          "expr": "(isDate(datum[\"dateChecked\"]) || (isValid(datum[\"dateChecked\"]) && isFinite(+datum[\"dateChecked\"]))) && isValid(datum[\"mean_death\"]) && isFinite(+datum[\"mean_death\"])"
        }
      ]
    },
    {
      "name": "data_2",
      "source": "source_0",
      "transform": [
        {
          "type": "filter",
          "expr": "(isDate(datum[\"dateChecked\"]) || (isValid(datum[\"dateChecked\"]) && isFinite(+datum[\"dateChecked\"]))) && isValid(datum[\"mean_negative\"]) && isFinite(+datum[\"mean_negative\"])"
        }
      ]
    },
    {
      "name": "data_3",
      "source": "source_0",
      "transform": [
        {
          "type": "filter",
          "expr": "(isDate(datum[\"dateChecked\"]) || (isValid(datum[\"dateChecked\"]) && isFinite(+datum[\"dateChecked\"]))) && isValid(datum[\"mean_recovered\"]) && isFinite(+datum[\"mean_recovered\"])"
        }
      ]
    },
    {
      "name": "data_4",
      "source": "source_0",
      "transform": [
        {
          "type": "filter",
          "expr": "(isDate(datum[\"dateChecked\"]) || (isValid(datum[\"dateChecked\"]) && isFinite(+datum[\"dateChecked\"]))) && isValid(datum[\"mean_positive\"]) && isFinite(+datum[\"mean_positive\"])"
        }
      ]
    },
    {
      "name": "data_5",
      "source": "source_0",
      "transform": [
        {
          "type": "filter",
          "expr": "(isDate(datum[\"dateChecked\"]) || (isValid(datum[\"dateChecked\"]) && isFinite(+datum[\"dateChecked\"]))) && isValid(datum[\"mean_hospitalized\"]) && isFinite(+datum[\"mean_hospitalized\"])"
        }
      ]
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
      "name": "child__layer_negative_layer_0_marks",
      "type": "line",
      "style": [
        "line"
      ],
      "sort": {
        "field": "datum[\"dateChecked\"]"
      },
      "from": {
        "data": "source_0"
      },
      "encode": {
        "update": {
          "tooltip": {
            "signal": "{\"dateChecked\": timeFormat(datum[\"dateChecked\"], '%b %d, %Y'), \"Count\": format(datum[\"mean_negative\"], \"\")}"
          },
          "stroke": {
            "scale": "color",
            "value": "negative"
          },
          "x": {
            "scale": "x",
            "field": "dateChecked"
          },
          "y": {
            "scale": "y",
            "field": "mean_negative"
          },
          "strokeWidth": {
            "value": 3
          },
          "defined": {
            "signal": "isValid(datum[\"dateChecked\"]) && isFinite(+datum[\"dateChecked\"]) && isValid(datum[\"mean_negative\"]) && isFinite(+datum[\"mean_negative\"])"
          }
        }
      }
    },
    {
      "name": "child__layer_negative_layer_1_marks",
      "type": "symbol",
      "style": [
        "point"
      ],
      "from": {
        "data": "data_2"
      },
      "encode": {
        "update": {
          "opacity": {
            "value": 1
          },
          "size": {
            "value": 100
          },
          "tooltip": {
            "signal": "{\"dateChecked\": timeFormat(datum[\"dateChecked\"], '%b %d, %Y'), \"Count\": format(datum[\"mean_negative\"], \"\")}"
          },
          "fill": {
            "scale": "color",
            "value": "negative"
          },
          "x": {
            "scale": "x",
            "field": "dateChecked"
          },
          "y": {
            "scale": "y",
            "field": "mean_negative"
          }
        }
      }
    },
    {
      "name": "child__layer_recovered_layer_0_marks",
      "type": "line",
      "style": [
        "line"
      ],
      "sort": {
        "field": "datum[\"dateChecked\"]"
      },
      "from": {
        "data": "source_0"
      },
      "encode": {
        "update": {
          "tooltip": {
            "signal": "{\"dateChecked\": timeFormat(datum[\"dateChecked\"], '%b %d, %Y'), \"Count\": format(datum[\"mean_recovered\"], \"\")}"
          },
          "stroke": {
            "scale": "color",
            "value": "recovered"
          },
          "x": {
            "scale": "x",
            "field": "dateChecked"
          },
          "y": {
            "scale": "y",
            "field": "mean_recovered"
          },
          "strokeWidth": {
            "value": 3
          },
          "defined": {
            "signal": "isValid(datum[\"dateChecked\"]) && isFinite(+datum[\"dateChecked\"]) && isValid(datum[\"mean_recovered\"]) && isFinite(+datum[\"mean_recovered\"])"
          }
        }
      }
    },
    {
      "name": "child__layer_recovered_layer_1_marks",
      "type": "symbol",
      "style": [
        "point"
      ],
      "from": {
        "data": "data_3"
      },
      "encode": {
        "update": {
          "opacity": {
            "value": 1
          },
          "size": {
            "value": 100
          },
          "tooltip": {
            "signal": "{\"dateChecked\": timeFormat(datum[\"dateChecked\"], '%b %d, %Y'), \"Count\": format(datum[\"mean_recovered\"], \"\")}"
          },
          "fill": {
            "scale": "color",
            "value": "recovered"
          },
          "x": {
            "scale": "x",
            "field": "dateChecked"
          },
          "y": {
            "scale": "y",
            "field": "mean_recovered"
          }
        }
      }
    },
    {
      "name": "child__layer_positive_layer_0_marks",
      "type": "line",
      "style": [
        "line"
      ],
      "sort": {
        "field": "datum[\"dateChecked\"]"
      },
      "from": {
        "data": "source_0"
      },
      "encode": {
        "update": {
          "tooltip": {
            "signal": "{\"dateChecked\": timeFormat(datum[\"dateChecked\"], '%b %d, %Y'), \"Count\": format(datum[\"mean_positive\"], \"\")}"
          },
          "stroke": {
            "scale": "color",
            "value": "positive"
          },
          "x": {
            "scale": "x",
            "field": "dateChecked"
          },
          "y": {
            "scale": "y",
            "field": "mean_positive"
          },
          "strokeWidth": {
            "value": 3
          },
          "defined": {
            "signal": "isValid(datum[\"dateChecked\"]) && isFinite(+datum[\"dateChecked\"]) && isValid(datum[\"mean_positive\"]) && isFinite(+datum[\"mean_positive\"])"
          }
        }
      }
    },
    {
      "name": "child__layer_positive_layer_1_marks",
      "type": "symbol",
      "style": [
        "point"
      ],
      "from": {
        "data": "data_4"
      },
      "encode": {
        "update": {
          "opacity": {
            "value": 1
          },
          "size": {
            "value": 100
          },
          "tooltip": {
            "signal": "{\"dateChecked\": timeFormat(datum[\"dateChecked\"], '%b %d, %Y'), \"Count\": format(datum[\"mean_positive\"], \"\")}"
          },
          "fill": {
            "scale": "color",
            "value": "positive"
          },
          "x": {
            "scale": "x",
            "field": "dateChecked"
          },
          "y": {
            "scale": "y",
            "field": "mean_positive"
          }
        }
      }
    },
    {
      "name": "child__layer_hospitalized_layer_0_marks",
      "type": "line",
      "style": [
        "line"
      ],
      "sort": {
        "field": "datum[\"dateChecked\"]"
      },
      "from": {
        "data": "source_0"
      },
      "encode": {
        "update": {
          "tooltip": {
            "signal": "{\"dateChecked\": timeFormat(datum[\"dateChecked\"], '%b %d, %Y'), \"Count\": format(datum[\"mean_hospitalized\"], \"\")}"
          },
          "stroke": {
            "scale": "color",
            "value": "hospitalized"
          },
          "x": {
            "scale": "x",
            "field": "dateChecked"
          },
          "y": {
            "scale": "y",
            "field": "mean_hospitalized"
          },
          "strokeWidth": {
            "value": 3
          },
          "defined": {
            "signal": "isValid(datum[\"dateChecked\"]) && isFinite(+datum[\"dateChecked\"]) && isValid(datum[\"mean_hospitalized\"]) && isFinite(+datum[\"mean_hospitalized\"])"
          }
        }
      }
    },
    {
      "name": "child__layer_hospitalized_layer_1_marks",
      "type": "symbol",
      "style": [
        "point"
      ],
      "from": {
        "data": "data_5"
      },
      "encode": {
        "update": {
          "opacity": {
            "value": 1
          },
          "size": {
            "value": 100
          },
          "tooltip": {
            "signal": "{\"dateChecked\": timeFormat(datum[\"dateChecked\"], '%b %d, %Y'), \"Count\": format(datum[\"mean_hospitalized\"], \"\")}"
          },
          "fill": {
            "scale": "color",
            "value": "hospitalized"
          },
          "x": {
            "scale": "x",
            "field": "dateChecked"
          },
          "y": {
            "scale": "y",
            "field": "mean_hospitalized"
          }
        }
      }
    },
    {
      "name": "child__layer_death_layer_0_marks",
      "type": "line",
      "style": [
        "line"
      ],
      "sort": {
        "field": "datum[\"dateChecked\"]"
      },
      "from": {
        "data": "source_0"
      },
      "encode": {
        "update": {
          "tooltip": {
            "signal": "{\"dateChecked\": timeFormat(datum[\"dateChecked\"], '%b %d, %Y'), \"Count\": format(datum[\"mean_death\"], \"\")}"
          },
          "stroke": {
            "scale": "color",
            "value": "death"
          },
          "x": {
            "scale": "x",
            "field": "dateChecked"
          },
          "y": {
            "scale": "y",
            "field": "mean_death"
          },
          "strokeWidth": {
            "value": 3
          },
          "defined": {
            "signal": "isValid(datum[\"dateChecked\"]) && isFinite(+datum[\"dateChecked\"]) && isValid(datum[\"mean_death\"]) && isFinite(+datum[\"mean_death\"])"
          }
        }
      }
    },
    {
      "name": "child__layer_death_layer_1_marks",
      "type": "symbol",
      "style": [
        "point"
      ],
      "from": {
        "data": "data_1"
      },
      "encode": {
        "update": {
          "opacity": {
            "value": 1
          },
          "size": {
            "value": 100
          },
          "tooltip": {
            "signal": "{\"dateChecked\": timeFormat(datum[\"dateChecked\"], '%b %d, %Y'), \"Count\": format(datum[\"mean_death\"], \"\")}"
          },
          "fill": {
            "scale": "color",
            "value": "death"
          },
          "x": {
            "scale": "x",
            "field": "dateChecked"
          },
          "y": {
            "scale": "y",
            "field": "mean_death"
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
        "fields": [
          {
            "data": "source_0",
            "field": "dateChecked"
          },
          {
            "data": "data_2",
            "field": "dateChecked"
          },
          {
            "data": "data_3",
            "field": "dateChecked"
          },
          {
            "data": "data_4",
            "field": "dateChecked"
          },
          {
            "data": "data_5",
            "field": "dateChecked"
          },
          {
            "data": "data_1",
            "field": "dateChecked"
          }
        ]
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
      "type": "log",
      "domain": {
        "fields": [
          {
            "data": "source_0",
            "field": "mean_negative"
          },
          {
            "data": "data_2",
            "field": "mean_negative"
          },
          {
            "data": "source_0",
            "field": "mean_recovered"
          },
          {
            "data": "data_3",
            "field": "mean_recovered"
          },
          {
            "data": "source_0",
            "field": "mean_positive"
          },
          {
            "data": "data_4",
            "field": "mean_positive"
          },
          {
            "data": "source_0",
            "field": "mean_hospitalized"
          },
          {
            "data": "data_5",
            "field": "mean_hospitalized"
          },
          {
            "data": "source_0",
            "field": "mean_death"
          },
          {
            "data": "data_1",
            "field": "mean_death"
          }
        ]
      },
      "range": [
        {
          "signal": "height"
        },
        0
      ],
      "nice": true
    },
    {
      "name": "color",
      "type": "ordinal",
      "domain": {
        "fields": [
          [
            "negative"
          ],
          [
            "recovered"
          ],
          [
            "positive"
          ],
          [
            "hospitalized"
          ],
          [
            "death"
          ]
        ]
      },
      "range": "category"
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
      "title": "Count",
      "labelOverlap": "greedy",
      "zindex": 0
    }
  ],
  "legends": [
    {
      "stroke": "color",
      "symbolType": "circle",
      "fill": "color",
      "encode": {
        "symbols": {
          "update": {
            "opacity": {
              "value": 1
            }
          }
        }
      }
    }
  ],
  "config": {}
}