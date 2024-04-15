import './app.css';
import Home from './components/Home';

import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MusicClub from './components/clublist/MusicClub.js';
import DanceClub from './components/clublist/dance.js';
import DebsocClub from './components/clublist/debsoc.js';
import RangmanchClub from './components/clublist/rangmanch.js';
import IngenuityEvent from './components/eventslist/ingenuity.js';
import NUMUNEvent from './components/eventslist/numun.js';
import TEDxEvent from './components/eventslist/tedx.js';





import Clubs from './components/Clubs';
import Profile from './components/Profile';
import Settings from './components/Settings';

import Events from './components/Events';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/clubs" element = {<Clubs />}>
            
          </Route>
          <Route path="/events" element = {<Events />} />
          <Route path="/profile" element= {<Profile />}>
          </Route>
          <Route path="/settings" element = {<Settings />}>

          </Route> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/clubs/music" element={<MusicClub />} />
          <Route path="/clubs/dance" element={<DanceClub />} />
          <Route path="/clubs/debsoc" element={<DebsocClub />} />
          <Route path="/clubs/rangmanch" element={<RangmanchClub />} />
          <Route path="/events/ingenuity" element={<IngenuityEvent />} />
          <Route path="/events/numun" element={<NUMUNEvent />} />
          <Route path="/events/tedxniituniversity" element={<TEDxEvent />} />




      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;



