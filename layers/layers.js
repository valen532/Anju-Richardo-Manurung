var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps: ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKABUPATEN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKABUPATEN_AR_50K_1 = format_ADMINISTRASIKABUPATEN_AR_50K_1.readFeatures(json_ADMINISTRASIKABUPATEN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKABUPATEN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKABUPATEN_AR_50K_1.addFeatures(features_ADMINISTRASIKABUPATEN_AR_50K_1);
var lyr_ADMINISTRASIKABUPATEN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKABUPATEN_AR_50K_1, 
                style: style_ADMINISTRASIKABUPATEN_AR_50K_1,
                popuplayertitle: 'ADMINISTRASIKABUPATEN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKABUPATEN_AR_50K_1.png" /> ADMINISTRASIKABUPATEN_AR_50K'
            });
var format_TERMINALBUS_AR_50K_2 = new ol.format.GeoJSON();
var features_TERMINALBUS_AR_50K_2 = format_TERMINALBUS_AR_50K_2.readFeatures(json_TERMINALBUS_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TERMINALBUS_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERMINALBUS_AR_50K_2.addFeatures(features_TERMINALBUS_AR_50K_2);
var lyr_TERMINALBUS_AR_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERMINALBUS_AR_50K_2, 
                style: style_TERMINALBUS_AR_50K_2,
                popuplayertitle: 'TERMINALBUS_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/TERMINALBUS_AR_50K_2.png" /> TERMINALBUS_AR_50K'
            });
var format_JALAN_LN_50K_3 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_3 = format_JALAN_LN_50K_3.readFeatures(json_JALAN_LN_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_3.addFeatures(features_JALAN_LN_50K_3);
var lyr_JALAN_LN_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_3, 
                style: style_JALAN_LN_50K_3,
                popuplayertitle: 'JALAN_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_3.png" /> JALAN_LN_50K'
            });
var format_ne_10m_airports_4 = new ol.format.GeoJSON();
var features_ne_10m_airports_4 = format_ne_10m_airports_4.readFeatures(json_ne_10m_airports_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airports_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airports_4.addFeatures(features_ne_10m_airports_4);
var lyr_ne_10m_airports_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ne_10m_airports_4, 
                style: style_ne_10m_airports_4,
                popuplayertitle: 'ne_10m_airports',
                interactive: true,
    title: 'ne_10m_airports<br />\
    <img src="styles/legend/ne_10m_airports_4_0.png" /> major<br />\
    <img src="styles/legend/ne_10m_airports_4_1.png" /> mid<br />\
    <img src="styles/legend/ne_10m_airports_4_2.png" /> small<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_ADMINISTRASIKABUPATEN_AR_50K_1.setVisible(true);lyr_TERMINALBUS_AR_50K_2.setVisible(true);lyr_JALAN_LN_50K_3.setVisible(true);lyr_ne_10m_airports_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_ADMINISTRASIKABUPATEN_AR_50K_1,lyr_TERMINALBUS_AR_50K_2,lyr_JALAN_LN_50K_3,lyr_ne_10m_airports_4];
lyr_ADMINISTRASIKABUPATEN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TERMINALBUS_AR_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KODTRM': 'KODTRM', 'MGTTRM': 'MGTTRM', 'STATRM': 'STATRM', 'KATTRM': 'KATTRM', 'TIPTRM': 'TIPTRM', 'THBTRM': 'THBTRM', 'THOTRM': 'THOTRM', 'THTTRM': 'THTTRM', 'KONKON': 'KONKON', 'JLBTRM': 'JLBTRM', 'KEBTRM': 'KEBTRM', 'JLDTRM': 'JLDTRM', 'KEDTRM': 'KEDTRM', 'PARTRM': 'PARTRM', 'KEPTRM': 'KEPTRM', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_50K_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ne_10m_airports_4.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', });
lyr_ADMINISTRASIKABUPATEN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TERMINALBUS_AR_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KODTRM': 'TextEdit', 'MGTTRM': 'TextEdit', 'STATRM': 'Range', 'KATTRM': 'Range', 'TIPTRM': 'Range', 'THBTRM': 'TextEdit', 'THOTRM': 'TextEdit', 'THTTRM': 'TextEdit', 'KONKON': 'Range', 'JLBTRM': 'Range', 'KEBTRM': 'TextEdit', 'JLDTRM': 'Range', 'KEDTRM': 'TextEdit', 'PARTRM': 'Range', 'KEPTRM': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_LN_50K_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_ne_10m_airports_4.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'TextEdit', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', });
lyr_ADMINISTRASIKABUPATEN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TERMINALBUS_AR_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'KODTRM': 'no label', 'MGTTRM': 'no label', 'STATRM': 'no label', 'KATTRM': 'no label', 'TIPTRM': 'no label', 'THBTRM': 'no label', 'THOTRM': 'no label', 'THTTRM': 'no label', 'KONKON': 'no label', 'JLBTRM': 'no label', 'KEBTRM': 'no label', 'JLDTRM': 'no label', 'KEDTRM': 'no label', 'PARTRM': 'no label', 'KEPTRM': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_LN_50K_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'inline label - always visible', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ne_10m_airports_4.set('fieldLabels', {'type': 'inline label - always visible', 'name': 'inline label - always visible', 'iata_code': 'inline label - always visible', 'wikipedia': 'inline label - always visible', });
lyr_ne_10m_airports_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});