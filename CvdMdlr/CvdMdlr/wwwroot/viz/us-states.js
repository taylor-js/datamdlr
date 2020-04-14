var usstates = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "width": 1100,
    "height": 800,
        "projection": {
        "type": "albersUsa"
    },
    "layer": [
        {
            "data": {
                "url": "https://raw.githubusercontent.com/vega/vega/master/docs/data/us-10m.json",
                "format": {
                    "type": "topojson",
                    "feature": "states"
                }
            },
            "mark": {
                "type": "geoshape",
                "fill": "lightgray",
                "stroke": "white"
            }
        },
        {
            "data": {
                "url": "viz/us-state-capitals.json"
            },
            "encoding": {
                "longitude": {
                    "field": "lon",
                    "type": "quantitative"
                },
                "latitude": {
                    "field": "lat",
                    "type": "quantitative"
                }
            },
            "layer": [
                {
                    "mark": {
                        "type": "circle",
                        "color": "blue"
                    }
                },
                {
                "mark": {
                    "type": "text",
                    "dy": -10
                },
                "encoding": {
                    "text": { "field": "state", "type": "nominal" }
                }
                }
            ]
        }
    ]
}
