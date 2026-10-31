var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_sang_2 = new ol.format.GeoJSON();
var features_sang_2 = format_sang_2.readFeatures(json_sang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sang_2.addFeatures(features_sang_2);
var lyr_sang_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sang_2, 
                style: style_sang_2,
                popuplayertitle: 'sang',
                interactive: true,
                title: '<img src="styles/legend/sang_2.png" /> sang'
            });
var format_Buildings_3 = new ol.format.GeoJSON();
var features_Buildings_3 = format_Buildings_3.readFeatures(json_Buildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_3.addFeatures(features_Buildings_3);
var lyr_Buildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_3, 
                style: style_Buildings_3,
                popuplayertitle: 'Buildings',
                interactive: true,
                title: '<img src="styles/legend/Buildings_3.png" /> Buildings'
            });
var format_Landuse_4 = new ol.format.GeoJSON();
var features_Landuse_4 = format_Landuse_4.readFeatures(json_Landuse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_4.addFeatures(features_Landuse_4);
var lyr_Landuse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landuse_4, 
                style: style_Landuse_4,
                popuplayertitle: 'Landuse',
                interactive: true,
                title: '<img src="styles/legend/Landuse_4.png" /> Landuse'
            });
var format_Places_5 = new ol.format.GeoJSON();
var features_Places_5 = format_Places_5.readFeatures(json_Places_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Places_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Places_5.addFeatures(features_Places_5);
var lyr_Places_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Places_5, 
                style: style_Places_5,
                popuplayertitle: 'Places',
                interactive: true,
                title: '<img src="styles/legend/Places_5.png" /> Places'
            });
var format_pois_6 = new ol.format.GeoJSON();
var features_pois_6 = format_pois_6.readFeatures(json_pois_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pois_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pois_6.addFeatures(features_pois_6);
var lyr_pois_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pois_6, 
                style: style_pois_6,
                popuplayertitle: 'pois',
                interactive: true,
                title: '<img src="styles/legend/pois_6.png" /> pois'
            });
var format_Pois_1_7 = new ol.format.GeoJSON();
var features_Pois_1_7 = format_Pois_1_7.readFeatures(json_Pois_1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pois_1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pois_1_7.addFeatures(features_Pois_1_7);
var lyr_Pois_1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pois_1_7, 
                style: style_Pois_1_7,
                popuplayertitle: 'Pois_1',
                interactive: true,
                title: '<img src="styles/legend/Pois_1_7.png" /> Pois_1'
            });
var format_Railways_8 = new ol.format.GeoJSON();
var features_Railways_8 = format_Railways_8.readFeatures(json_Railways_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Railways_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railways_8.addFeatures(features_Railways_8);
var lyr_Railways_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railways_8, 
                style: style_Railways_8,
                popuplayertitle: 'Railways',
                interactive: true,
                title: '<img src="styles/legend/Railways_8.png" /> Railways'
            });
var format_Roads_9 = new ol.format.GeoJSON();
var features_Roads_9 = format_Roads_9.readFeatures(json_Roads_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_9.addFeatures(features_Roads_9);
var lyr_Roads_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_9, 
                style: style_Roads_9,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_9.png" /> Roads'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_sang_2.setVisible(true);lyr_Buildings_3.setVisible(true);lyr_Landuse_4.setVisible(true);lyr_Places_5.setVisible(true);lyr_pois_6.setVisible(true);lyr_Pois_1_7.setVisible(true);lyr_Railways_8.setVisible(true);lyr_Roads_9.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleSatellite_1,lyr_sang_2,lyr_Buildings_3,lyr_Landuse_4,lyr_Places_5,lyr_pois_6,lyr_Pois_1_7,lyr_Railways_8,lyr_Roads_9];
lyr_sang_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'MOD_OR_NOT': 'MOD_OR_NOT', 'ORGI_Uniqu': 'ORGI_Uniqu', 'STATE_UT': 'STATE_UT', 'STATE_LGD': 'STATE_LGD', 'Dist_LGD': 'Dist_LGD', 'Sub_dist': 'Sub_dist', 'Subdis_LGD': 'Subdis_LGD', 'Subdis_Typ': 'Subdis_Typ', 'Vill_name': 'Vill_name', 'Vill_cat': 'Vill_cat', 'Vill_LGD': 'Vill_LGD', 'District': 'District', });
lyr_Buildings_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Landuse_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Places_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', });
lyr_pois_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Pois_1_7.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Railways_8.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Roads_9.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_sang_2.set('fieldImages', {'OBJECTID_1': '', 'Shape_Leng': '', 'Shape_Area': '', 'MOD_OR_NOT': '', 'ORGI_Uniqu': '', 'STATE_UT': '', 'STATE_LGD': '', 'Dist_LGD': '', 'Sub_dist': '', 'Subdis_LGD': '', 'Subdis_Typ': '', 'Vill_name': '', 'Vill_cat': '', 'Vill_LGD': '', 'District': '', });
lyr_Buildings_3.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', });
lyr_Landuse_4.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_Places_5.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'population': '', 'name': '', });
lyr_pois_6.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_Pois_1_7.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_Railways_8.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_Roads_9.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_sang_2.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'MOD_OR_NOT': 'inline label - always visible', 'ORGI_Uniqu': 'inline label - always visible', 'STATE_UT': 'inline label - always visible', 'STATE_LGD': 'inline label - always visible', 'Dist_LGD': 'inline label - always visible', 'Sub_dist': 'inline label - always visible', 'Subdis_LGD': 'inline label - always visible', 'Subdis_Typ': 'inline label - always visible', 'Vill_name': 'inline label - always visible', 'Vill_cat': 'inline label - always visible', 'Vill_LGD': 'inline label - always visible', 'District': 'inline label - always visible', });
lyr_Buildings_3.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', });
lyr_Landuse_4.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Places_5.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'population': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_pois_6.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Pois_1_7.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_Railways_8.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', 'layer': 'inline label - always visible', 'bridge': 'inline label - always visible', 'tunnel': 'inline label - always visible', });
lyr_Roads_9.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', 'name': 'inline label - always visible', 'ref': 'inline label - always visible', 'oneway': 'inline label - always visible', 'maxspeed': 'inline label - always visible', 'layer': 'inline label - always visible', 'bridge': 'inline label - always visible', 'tunnel': 'inline label - always visible', });
lyr_Roads_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});