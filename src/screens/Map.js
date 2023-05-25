import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';

MapLibreGL.requestAndroidLocationPermissions();
MapLibreGL.setAccessToken(
  'pk.eyJ1IjoidWRheTAzNiIsImEiOiJjbGh5c3hnZ2ExNnM5M2twY3c0cmY0NmtxIn0.lpABX_SsGWz9eJ9LEiEwAQ',
);

// MapLibreGL.setWellKnownTileServer(MapLibreGL.TileServers.MapLibre);
const Map = () => {
  const MAPTILER_API_KEY = 'ztj8avziqeyuwweke4tb';
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('screen').width;
  const coardinateExample = [78.39086, 17.44203];

  return (
    <View style={styles.container}>
      <MapLibreGL.MapView
        onDidFinishRenderingMap={() => true}
        zoomEnabled={true}
        style={{
          height: height,
          width: width,
        }}
        logoEnabled={false}
        styleURL={`https://api.maptiler.com/maps/outdoor-v2/style.json?key=${MAPTILER_API_KEY}`}>
        <MapLibreGL.Camera
          zoomLevel={17}
          centerCoordinate={coardinateExample}
          animationMode="flyTo"
          animationDuration={4000}
        />
        <MapLibreGL.PointAnnotation id="point" coordinate={coardinateExample} />
      </MapLibreGL.MapView>
    </View>
  );
};
export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
