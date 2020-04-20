var multipiechart_AL = {
    "height": 200,
    "width": 200,
    "title": "Alabama",
    "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
    "transform": [
        { "filter": "datum.state == 'AL'" }
    ],
    "selection": {
        "grid": {
            "type": "interval",
            "bind": "scales"
        }
    },
    "repeat": {
        "layer": ["negative", "recovered", "positive", "hospitalized", "death"]
    },
    "spec": {
        "mark": {
            "type": "arc",
            "point": { "size": 200 },
            "tooltip": true,
            "size": 5
        },
        "encoding": {
            "theta": {
                "aggregate": "sum",
                "field": { "repeat": "layer" },
                "type": "quantitative"
            },
            "color": {
                "datum": { "repeat": "layer" },
                "type": "nominal"
            }
        }
    },
    "view": { "stroke": null }
};
var multipiechart_AK = {
  "height": 200,
  "width": 200,
  "title": "Alaska",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'AK'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"
      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_AZ = {
  "height": 200,
  "width": 200,
  "title": "Arizona",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'AZ'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"
      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_AR = {
  "height": 200,
  "width": 200,
  "title": "Arkansas",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'AR'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"
      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_CA = {
  "height": 200,
  "width": 200,
  "title": "California",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'CA'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"
      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_CO = {
  "height": 200,
  "width": 200,
  "title": "Colorado",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'CO'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"
      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_CT = {
  "height": 200,
  "width": 200,
  "title": "Connecticut",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'CT'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"
      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_DE = {
  "height": 200,
  "width": 200,
  "title": "Deleware",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'DE'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"
      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_FL = {
  "height": 200,
  "width": 200,
  "title": "Florida",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'FL'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"
      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_GA = {
  "height": 200,
  "width": 200,
  "title": "Georgia",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'GA'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"
      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_HI = {
  "height": 200,
  "width": 200,
  "title": "Hawaii",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'HI'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"
      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_ID = {
  "height": 200,
  "width": 200,
  "title": "Idaho",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'ID'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"
      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_IL = {
  "height": 200,
  "width": 200,
  "title": "Illinois",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'IL'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"
      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_IN = {
  "height": 200,
  "width": 200,
  "title": "Indiana",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'IN'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
};
var multipiechart_IA = {
  "height": 200,
  "width": 200,
  "title": "Iowa",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'IA'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_KS = {
  "height": 200,
  "width": 200,
  "title": "Kansas",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'KS'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}


//KS
var multipiechart_KY = {
  "height": 200,
  "width": 200,
  "title": "Kentucky",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'KY'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_LA = {
  "height": 200,
  "width": 200,
  "title": "Louisiana",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'LA'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_ME = {
  "height": 200,
  "width": 200,
  "title": "Maine",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'ME'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_MD = {
  "height": 200,
  "width": 200,
  "title": "Maryland",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'MD'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_MA = {
  "height": 200,
  "width": 200,
  "title": "Massachusetts",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'MA'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_MI = {
  "height": 200,
  "width": 200,
  "title": "Michigan",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'MI'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_MN = {
  "height": 200,
  "width": 200,
  "title": "Minnesota",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'MN'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_MS = {
  "height": 200,
  "width": 200,
  "title": "Mississippi",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'MS'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}
//


var multipiechart_MO = {
  "height": 200,
  "width": 200,
  "title": "Missouri",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'MO'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}
//////////////////////////////////

var multipiechart_MT = {
  "height": 200,
  "width": 200,
  "title": "Montana",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'MT'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_NE = {
  "height": 200,
  "width": 200,
  "title": "Nebraska",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'NE'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_NV = {
  "height": 200,
  "width": 200,
  "title": "Nevada",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'NV'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_NH = {
  "height": 200,
  "width": 200,
  "title": "New Hampshire",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'NH'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_NJ = {
  "height": 200,
  "width": 200,
  "title": "New Jersey",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'NJ'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_NM = {
  "height": 200,
  "width": 200,
  "title": "New Mexico",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'NM'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_NY = {
  "height": 200,
  "width": 200,
  "title": "New York",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'NY'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_NC = {
  "height": 200,
  "width": 200,
  "title": "North Carolina",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'NC'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_ND = {
  "height": 200,
  "width": 200,
  "title": "North Dakoda",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'ND'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_OH = {
  "height": 200,
  "width": 200,
  "title": "Ohio",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'OH'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_OK = {
  "height": 200,
  "width": 200,
  "title": "Oklahoma",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'OK'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_OR = {
  "height": 200,
  "width": 200,
  "title": "Oregon",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'OR'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}

//PA",

var multipiechart_PA = {
  "height": 200,
  "width": 200,
  "title": "Pennsylvania",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'PA'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_RI = {
  "height": 200,
  "width": 200,
  "title": "Rhode Island",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'RI'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_SC = {
  "height": 200,
  "width": 200,
  "title": "South Carolina",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'SC'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_SD = {
  "height": 200,
  "width": 200,
  "title": "South Dakota",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'SD'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}

//

var multipiechart_TN = {
  "height": 200,
  "width": 200,
  "title": "Tennessee ",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'TN'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_TX = {
  "height": 200,
  "width": 200,
  "title": "Texas",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'TX'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_UT = {
  "height": 200,
  "width": 200,
  "title": "Utah",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'UT'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_VT = {
  "height": 200,
  "width": 200,
  "title": "Vermont",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'VT'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_VA = {
  "height": 200,
  "width": 200,
  "title": "Virginia",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'VA'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_WA = {
  "height": 200,
  "width": 200,
  "title": "Washington",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'WA'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_WV = {
  "height": 200,
  "width": 200,
  "title": "West Virginia",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'WV'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_WI = {
  "height": 200,
  "width": 200,
  "title": "Wisconsin",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'WI'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}; var multipiechart_WY = {
  "height": 200,
  "width": 200,
  "title": "Wyoming",
  "data": { "url": "https://covidtracking.com/api/v1/states/daily.json" },
  "transform": [
    { "filter": "datum.state == 'WY'" }
  ],
  "selection": {
    "grid": {
      "type": "interval",
      "bind": "scales"
    }
  },
  "repeat": {
    "layer": [ "negative", "recovered", "positive", "hospitalized", "death" ]
  },
  "spec": {
    "mark": {
      "type": "arc",

      "point": { "size": 200 },
      "tooltip": true,
      "size": 5
    },
    "encoding": {
      "theta": {
        "aggregate": "sum",
        "field": { "repeat": "layer" },
        "type": "quantitative"

      },
      "color": {
        "datum": { "repeat": "layer" },
        "type": "nominal"
      }
    }
  },
  "view": { "stroke": null }
}
