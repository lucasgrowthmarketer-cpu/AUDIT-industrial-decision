// France Regions TopoJSON - Embedded locally (no external fetch)
// Simplified geometry for performance

export const franceRegionsGeo = {
  "type": "Topology",
  "arcs": [],
  "objects": {
    "regions": {
      "type": "GeometryCollection",
      "geometries": [
        {"type": "Polygon", "properties": {"code": "ARA", "name": "Auvergne-Rhône-Alpes"}, "arcs": [[0]]},
        {"type": "Polygon", "properties": {"code": "BFC", "name": "Bourgogne-Franche-Comté"}, "arcs": [[1]]},
        {"type": "Polygon", "properties": {"code": "BRE", "name": "Bretagne"}, "arcs": [[2]]},
        {"type": "Polygon", "properties": {"code": "CVL", "name": "Centre-Val de Loire"}, "arcs": [[3]]},
        {"type": "Polygon", "properties": {"code": "COR", "name": "Corse"}, "arcs": [[4]]},
        {"type": "Polygon", "properties": {"code": "GES", "name": "Grand Est"}, "arcs": [[5]]},
        {"type": "Polygon", "properties": {"code": "HDF", "name": "Hauts-de-France"}, "arcs": [[6]]},
        {"type": "Polygon", "properties": {"code": "IDF", "name": "Île-de-France"}, "arcs": [[7]]},
        {"type": "Polygon", "properties": {"code": "NOR", "name": "Normandie"}, "arcs": [[8]]},
        {"type": "Polygon", "properties": {"code": "NAQ", "name": "Nouvelle-Aquitaine"}, "arcs": [[9]]},
        {"type": "Polygon", "properties": {"code": "OCC", "name": "Occitanie"}, "arcs": [[10]]},
        {"type": "Polygon", "properties": {"code": "PDL", "name": "Pays de la Loire"}, "arcs": [[11]]},
        {"type": "Polygon", "properties": {"code": "PAC", "name": "Provence-Alpes-Côte d'Azur"}, "arcs": [[12]]}
      ]
    }
  }
};

// GeoJSON format for react-simple-maps
export const franceRegionsGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "code": "ARA", "name": "Auvergne-Rhône-Alpes", "nom": "Auvergne-Rhône-Alpes" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[4.8, 45.8], [5.8, 45.8], [6.5, 45.2], [6.8, 44.4], [5.5, 44.1], [4.2, 44.5], [3.5, 44.9], [3.3, 45.5], [3.8, 46.2], [4.8, 45.8]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "code": "BFC", "name": "Bourgogne-Franche-Comté", "nom": "Bourgogne-Franche-Comté" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[3.0, 47.0], [4.5, 47.8], [5.8, 47.5], [6.8, 47.2], [6.5, 46.5], [5.8, 45.8], [4.8, 45.8], [3.8, 46.2], [3.0, 47.0]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "code": "BRE", "name": "Bretagne", "nom": "Bretagne" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-4.8, 48.4], [-3.0, 48.8], [-1.2, 48.5], [-1.0, 47.5], [-2.5, 47.3], [-4.5, 47.7], [-4.8, 48.4]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "code": "CVL", "name": "Centre-Val de Loire", "nom": "Centre-Val de Loire" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[0.8, 48.2], [2.5, 48.5], [3.0, 47.5], [3.0, 47.0], [2.2, 46.5], [1.2, 46.5], [0.5, 47.2], [0.8, 48.2]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "code": "COR", "name": "Corse", "nom": "Corse" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[8.6, 42.7], [9.5, 43.0], [9.5, 41.4], [8.8, 41.4], [8.6, 42.0], [8.6, 42.7]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "code": "GES", "name": "Grand Est", "nom": "Grand Est" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[4.0, 49.5], [5.5, 49.5], [7.5, 49.0], [8.2, 48.5], [7.5, 47.5], [6.8, 47.2], [5.8, 47.5], [4.5, 47.8], [3.5, 48.5], [4.0, 49.5]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "code": "HDF", "name": "Hauts-de-France", "nom": "Hauts-de-France" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[1.5, 50.1], [3.0, 50.5], [4.2, 50.2], [4.0, 49.5], [3.5, 48.9], [2.5, 48.9], [1.5, 49.2], [1.5, 50.1]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "code": "IDF", "name": "Île-de-France", "nom": "Île-de-France" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[1.5, 49.2], [2.5, 48.9], [3.5, 48.9], [3.5, 48.5], [3.0, 47.8], [2.5, 48.5], [1.5, 48.4], [1.5, 49.2]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "code": "NOR", "name": "Normandie", "nom": "Normandie" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-1.8, 49.7], [0.0, 49.5], [1.5, 49.2], [1.5, 48.4], [0.8, 48.2], [-0.5, 48.5], [-1.2, 48.5], [-1.8, 49.7]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "code": "NAQ", "name": "Nouvelle-Aquitaine", "nom": "Nouvelle-Aquitaine" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-1.5, 46.5], [0.5, 47.2], [1.2, 46.5], [2.2, 46.5], [2.0, 45.5], [1.5, 44.5], [0.0, 43.3], [-1.8, 43.5], [-1.5, 45.0], [-1.5, 46.5]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "code": "OCC", "name": "Occitanie", "nom": "Occitanie" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[1.5, 44.5], [2.0, 45.5], [3.3, 45.5], [4.2, 44.5], [4.5, 43.8], [3.0, 42.5], [1.5, 42.5], [0.0, 43.3], [1.5, 44.5]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "code": "PDL", "name": "Pays de la Loire", "nom": "Pays de la Loire" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-2.5, 47.3], [-1.0, 47.5], [-0.5, 48.5], [0.8, 48.2], [0.5, 47.2], [-1.5, 46.5], [-2.5, 47.3]]]
      }
    },
    {
      "type": "Feature",
      "properties": { "code": "PAC", "name": "Provence-Alpes-Côte d'Azur", "nom": "Provence-Alpes-Côte d'Azur" },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[4.5, 43.8], [4.2, 44.5], [5.5, 44.1], [6.8, 44.4], [7.5, 43.8], [7.0, 43.1], [5.0, 43.2], [4.5, 43.8]]]
      }
    }
  ]
};

// Region code to name mapping
export const regionNames = {
  "ARA": { en: "Auvergne-Rhône-Alpes", fr: "Auvergne-Rhône-Alpes" },
  "BFC": { en: "Bourgogne-Franche-Comté", fr: "Bourgogne-Franche-Comté" },
  "BRE": { en: "Brittany", fr: "Bretagne" },
  "CVL": { en: "Centre-Val de Loire", fr: "Centre-Val de Loire" },
  "COR": { en: "Corsica", fr: "Corse" },
  "GES": { en: "Grand Est", fr: "Grand Est" },
  "HDF": { en: "Hauts-de-France", fr: "Hauts-de-France" },
  "IDF": { en: "Île-de-France", fr: "Île-de-France" },
  "NOR": { en: "Normandy", fr: "Normandie" },
  "NAQ": { en: "Nouvelle-Aquitaine", fr: "Nouvelle-Aquitaine" },
  "OCC": { en: "Occitanie", fr: "Occitanie" },
  "PDL": { en: "Pays de la Loire", fr: "Pays de la Loire" },
  "PAC": { en: "Provence-Alpes-Côte d'Azur", fr: "Provence-Alpes-Côte d'Azur" }
};
