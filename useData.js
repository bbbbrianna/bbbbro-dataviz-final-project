import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
      'https://gist.githubusercontent.com/bbbbrianna/e74082354cbdfe18d42c7b66ecdefa76/raw/0a1bea080c2d734561a026853f2faa4e3ff2a9f7/yearly_music_trend.csv'
export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d.Tempo = +d.bpm;
      d.Energy = +d.nrgy;
      d.Dancibility = +d.dnce;
      d.Loudness = +d.dB;
      d.Liveness = +d.live;
      d.Length = +d.dur;
      d.Valence = +d.val;
      d.Acousticness = +d.acous;
      d.Speechiness = +d.spch;
      d.Popularity = +d.pop;
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);
  
  return data;
};