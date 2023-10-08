import React, { useEffect } from 'react';
import Globe from 'globe.gl';
import './PrincipalContent.css'

function InteractiveGlobe() {
  useEffect(() => {
    const world = Globe()
      (document.getElementById('globeViz'))
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .pointOfView({ altitude: 4 }, 5000)
      .polygonCapColor(feat => 'rgba(200, 0, 0, 0.6)')
      .polygonSideColor(() => 'rgba(0, 100, 0, 0.05)')
      .polygonLabel(({ properties: d }) => `
          <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
          Vulnerability: <i>${Math.round(+d.POP_EST)}</i>
        `);

    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 1.8;

    // Use fetch para carregar o arquivo GeoJSON
    fetch('./final_excel_file.geojson')
      .then(response => response.json()) // Analise o GeoJSON como JSON
      .then(data => {
        // Use os dados do GeoJSON
        world.polygonsData(data.features.filter(d => d.properties.ISO_A2 !== 'AQ'));
        
        setTimeout(() => world
        .polygonsTransitionDuration(4000)
        .polygonAltitude(feat => Math.max(0.1, Math.sqrt(+feat.properties.POP_EST)/ 3))
      );
      })
      .catch(error => {
        console.error('Erro ao carregar o arquivo GeoJSON:', error);
      });

    return () => {
      // Limpe os recursos quando o componente for desmontado, se necessário
    };
  }, []);

  return (
        <div id="globeViz" style={{ width: '300px', height: '400px'}}></div>
  );
}

export default InteractiveGlobe;