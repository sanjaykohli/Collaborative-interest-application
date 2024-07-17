import './app.css';
import Home from './components/Home';

import LoginPage from './oauth/views/login';
import SignupPage from './oauth/views/signup';


import React from 'react';



import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MusicClub from './components/clublist/MusicClub.js';
import DanceClub from './components/clublist/dance.js';
import DebsocClub from './components/clublist/debsoc.js';
import RangmanchClub from './components/clublist/rangmanch.js';
import IngenuityEvent from './components/eventslist/ingenuity.js';
import NUMUNEvent from './components/eventslist/numun.js';
import TEDxEvent from './components/eventslist/tedx.js';
import HultPrizeEvent from './components/eventslist/hultprize.js';
import HouseElectionsEvent from './components/eventslist/houseelections.js';
import AudacityEvent from './components/eventslist/audacity.js';
import ChessClub from './components/clublist/chess.js';
import ArtsClub from './components/clublist/arts.js';
import KavishalaClub from './components/clublist/kavishala.js';
import PhotographyClub from './components/clublist/photography.js';
import RunningClub from './components/clublist/running.js';
import SustainabilityClub from './components/clublist/sustainability.js';
import ProgrammingClub from './components/clublist/programming.js';
import ElectronicsClub from './components/clublist/electronics.js';


import CustomCalendar from './components/Calendar';



import Amity from './components/amity.jsx';
import Bml from './components/bml.jsx';
import Lnmiit from './components/lnmiit.jsx';
import Raffels from './components/raffels.jsx';

import Tos from './components/tos.jsx';
import Pp from './components/pp.jsx';


import Notification from './components/notification.jsx';

import AdminPage from './components/admin/adminPage.jsx';



import Clubs from './components/Clubs';
import Profile from './components/Profile';
import Settings from './components/Settings';
import About from './components/about.jsx';
import Watch from './components/watch.jsx';


import Events from './components/Events';
import SinusoidEvent from './components/eventslist/sinusoid.js';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/clubs" element = {<Clubs />}></Route>
         {/* <Route path="/" element = {<LoginPage />} />  */}

          <Route path = "/admin" element = {<AdminPage />} />

          <Route path = "/termsofservice" element = {<Tos />} />
          <Route path = "/privacypolicy" element = {<Pp />} />



          <Route path = "/amity" element = {<Amity />} /> 
          <Route path = "/bmlmunjal" element = {<Bml />} />
          <Route path = "/lnmiit" element = {<Lnmiit />} />
          <Route path = "/raffles" element = {<Raffels />} />
            


          <Route path = "/notifications" element = {<Notification />} />
    

          <Route path="/signup" element = {<SignupPage />}></Route>
          <Route path="/events" element = {<Events />} />
          <Route path="/profile" element= {<Profile />}>
          </Route>
          <Route path="/settings" element = {<Settings />}>
    

          </Route>
          <Route path="/calendar" element = {<CustomCalendar />}></Route>
          <Route path="/watch" element = {<Watch />}> </Route>
          <Route path="/about" element = {<About />}></Route> 
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/clubs/music" element={<MusicClub />} />
          <Route path="/clubs/dance" element={<DanceClub />} />
          <Route path="/clubs/debsoc" element={<DebsocClub />} />
          <Route path="/clubs/rangmanch" element={<RangmanchClub />} />
          <Route path="/clubs/chess" element={<ChessClub />} />
          <Route path="/clubs/arts" element={<ArtsClub />} />
          <Route path="/clubs/kavishala" element={<KavishalaClub />} />
          <Route path="/clubs/photography" element={<PhotographyClub />} />
          <Route path="/clubs/running" element={<RunningClub />} />
          <Route path="/clubs/sustainability" element={<SustainabilityClub />} />
          <Route path="/clubs/programming" element={<ProgrammingClub />} />
          <Route path="/clubs/electronics" element={<ElectronicsClub />} />


          



          <Route path="/events/ingenuity" element={<IngenuityEvent />} />
          <Route path="/events/numun" element={<NUMUNEvent />} />
          <Route path="/events/tedxniituniversity" element={<TEDxEvent />} />
          <Route path="/events/sinusoid" element={<SinusoidEvent />} />
          <Route path="/events/hultprize" element={<HultPrizeEvent />} />
          <Route path="/events/houseelections" element={<HouseElectionsEvent />} />
          <Route path="/events/audacity" element={<AudacityEvent />} />


      </Routes>
    </BrowserRouter>
    </div>


  );
}

export default App;



