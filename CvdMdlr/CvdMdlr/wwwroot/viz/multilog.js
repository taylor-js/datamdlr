var multilinear = {
    "data": { "url": "https://covidtracking.com/api/us/daily.json" },
    "selection": { "grid": { "type": "interval", "bind": "scales" } },
    "title": "Cumulative (Linear)",
    "repeat": {
        "layer": ["negative", "recovered", "positive", "hospitalized", "death"]
    },
    "height": 200, "width": 300,
    "spec": {
        "mark": {
            "type": "line",
            "point": { "size": 50 },
            "tooltip": true,
            "size": 5
        },
        "encoding": {
            "x": { "field": "dateChecked", "type": "temporal" },
            "y": {
                "aggregate": "mean",
                "field": { "repeat": "layer" },
                "type": "quantitative",
                "title": "Cumulative"
            },
            "color": { "datum": { "repeat": "layer" }, "type": "nominal" }
        }
    }
}

var multilog = {
    "data": { "url": "https://covidtracking.com/api/us/daily.json" },
    "selection": { "grid": { "type": "interval", "bind": "scales" } },
    "title": "Cumulative (Log)",
    "repeat": {
        "layer": ["negative", "recovered", "positive", "hospitalized", "death"]
    },
    "height": 200, "width": 300,
    "spec": {
        "mark": {
            "type": "line",
            "point": { "size": 50 },
            "tooltip": true,
            "size": 5
        },
        "encoding": {
            "x": { "field": "dateChecked", "type": "temporal" },
            "y": {
                "aggregate": "mean",
                "field": { "repeat": "layer" },
                "type": "quantitative",
                "title": "Cumulative", "scale": { "type": "log" }
            },
            "color": { "datum": { "repeat": "layer" }, "type": "nominal" }
        }
    }
}