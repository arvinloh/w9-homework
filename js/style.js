// js/script.js

var spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Map of Australia showing live births in 2021 by state/territory",
    "width": 800,
    "height": 400,
    "projection": {"type": "equalEarth"},
    "data": {
      "url": "https://raw.githubusercontent.com/rowanhogan/austopojson/master/states.json",
      "format": {"type": "topojson", "feature": "states"}
    },
    "transform": [
      {
        "lookup": "properties.STATE_NAME",
        "from": {
          "data": {
            "values": [
              {"State/territory of birth": "New South Wales", "Live births": 98628},
              {"State/territory of birth": "Victoria", "Live births": 81153},
              {"State/territory of birth": "Queensland", "Live births": 62873},
              {"State/territory of birth": "Western Australia", "Live births": 34480},
              {"State/territory of birth": "South Australia", "Live births": 20037},
              {"State/territory of birth": "Tasmania", "Live births": 6053},
              {"State/territory of birth": "Australian Capital Territory", "Live births": 6419},
              {"State/territory of birth": "Northern Territory", "Live births": 3764}
            ]
          },
          "key": "State/territory of birth",
          "fields": ["Live births"]
        }
      }
    ],
    "mark": {"type": "geoshape", "stroke": "black", "strokeWidth": 1},
    "encoding": {
      "color": {
        "field": "Live births",
        "type": "quantitative",
        "scale": {"scheme": "blues"}
      },
      "tooltip": [
        {"field": "properties.STATE_NAME", "type": "nominal", "title": "State/Territory"},
        {"field": "Live births", "type": "quantitative"}
      ]
    }
  };
  
  vegaEmbed('#vis', spec);
  