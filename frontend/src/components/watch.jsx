// // Watch.js
// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import './Watch.css';

// const Watch = () => {
//   const [videos, setVideos] = useState([]);


//   useEffect(() => {
//     // Fetch video/reel data from an API or use mock data
//     const mockData = [
//       { id: 1, type: 'youtube', url: 'https://www.youtube.com/embed/Uj4kKoDdJF8' },
//       { id: 2, type: 'instagram', url: 'https://instagram.com/p/C2fwM9IIrGB/embed/' },
//       { id: 3, type: 'youtube', url: 'https://www.youtube.com/embed/_NGz6QcbsF8' },
//       { id: 4, type: 'youtube', url: 'https://www.youtube.com/embed/t-3ErVKHgl4' },
//       { id: 5, type: 'instagram', url: 'https://instagram.com/p/C1PpPVDMJlK/embed/' },
//       { id: 6, type: 'youtube', url: 'https://www.youtube.com/embed/Dfqvc2eOa-M' },
//       { id: 7, type: 'instagram', url: 'https://instagram.com/reel/C56lMVTSHUq/embed/' },
//       { id: 8, type: 'youtube', url: 'https://www.youtube.com/embed/xSrricvmTv8' },
//       { id: 9, type: 'instagram', url: 'https://instagram.com/p/Cj78bHkP3S1/embed/' },
//       { id: 10, type: 'youtube', url: 'https://www.youtube.com/embed/XxtoahxXyCc' },
//     ];

//     setVideos(mockData);
//   }, []);

//   return (
//     <div className="watch-container">
//       <Navbar />
//       <div className="watch-grids">
//         <div className="watch-grid grid-1">
//           {videos.slice(0, 4).map((video) => (
//             <div key={video.id} className="watch-item">
//               {video.type === 'youtube' ? (
//                 <iframe
//                   className="youtube-video"
//                   title={`YouTube Video ${video.id}`}
//                   src={video.url}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               ) : (
//                 <iframe
//                   className="instagram-reel"
//                   title={`Instagram Reel ${video.id}`}
//                   src={video.url}
//                   frameBorder="0"
//                   allowFullScreen
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="watch-grid grid-2">
//           {videos.slice(4, 6).map((video) => (
//             <div key={video.id} className="watch-item">
//               {video.type === 'youtube' ? (
//                 <iframe
//                   className="youtube-video"
//                   title={`YouTube Video ${video.id}`}
//                   src={video.url}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               ) : (
//                 <iframe
//                   className="instagram-reel"
//                   title={`Instagram Reel ${video.id}`}
//                   src={video.url}
//                   frameBorder="0"
//                   allowFullScreen
//                 />
//               )}
//             </div>
//           ))}
//           {videos.slice(6, 8).map((video) => (
//             <div key={video.id} className="watch-item">
//               {video.type === 'youtube' ? (
//                 <iframe
//                   className="youtube-video"
//                   title={`YouTube Video ${video.id}`}
//                   src={video.url}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               ) : (
//                 <iframe
//                   className="instagram-reel"
//                   title={`Instagram Reel ${video.id}`}
//                   src={video.url}
//                   frameBorder="0"
//                   allowFullScreen
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="watch-grid grid-3">
//           {videos.slice(8, 10).map((video) => (
//             <div key={video.id} className="watch-item">
//               {video.type === 'youtube' ? (
//                 <iframe
//                   className="youtube-video"
//                   title={`YouTube Video ${video.id}`}
//                   src={video.url}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               ) : (
//                 <iframe
//                   className="instagram-reel"
//                   title={`Instagram Reel ${video.id}`}
//                   src={video.url}
//                   frameBorder="0"
//                   allowFullScreen
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Watch;


// Watch.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Watch.css';

const Watch = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch video/reel data from an API or use mock data
    const mockData = [
      { id: 1, type: 'youtube', url: 'https://www.youtube.com/embed/Uj4kKoDdJF8' },
      { id: 2, type: 'instagram', url: 'https://instagram.com/p/C2fwM9IIrGB/embed/' },
      { id: 3, type: 'youtube', url: 'https://www.youtube.com/embed/_NGz6QcbsF8' },
      { id: 5, type: 'instagram', url: 'https://instagram.com/p/C1PpPVDMJlK/embed/' },
      { id: 6, type: 'youtube', url: 'https://www.youtube.com/embed/Dfqvc2eOa-M' },
      { id: 7, type: 'instagram', url: 'https://instagram.com/reel/C56lMVTSHUq/embed/' },
      { id: 9, type: 'instagram', url: 'https://instagram.com/p/Cj78bHkP3S1/embed/' },
      { id: 10, type: 'youtube', url: 'https://www.youtube.com/embed/XxtoahxXyCc' },
    ];

    setVideos(mockData);
  }, []);

  return (
    <div className="watch-container">
      <Navbar />
      <div className="watch-grids">
        <div className="watch-grid grid-1">
          {videos.slice(0, 3).map((video) => (
            <div key={video.id} className="watch-item">
              <iframe
                className="vertical-video"
                title={`${video.type === 'youtube' ? 'YouTube' : 'Instagram'} Video ${video.id}`}
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
        <div className="watch-grid grid-2">
          {videos.slice(3, 6).map((video) => (
            <div key={video.id} className="watch-item">
              <iframe
                className="vertical-video"
                title={`${video.type === 'youtube' ? 'YouTube' : 'Instagram'} Video ${video.id}`}
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
        <div className="watch-grid grid-3">
          {videos.slice(6, 8).map((video) => (
            <div key={video.id} className="watch-item">
              <iframe
                className="vertical-video"
                title={`${video.type === 'youtube' ? 'YouTube' : 'Instagram'} Video ${video.id}`}
                src={video.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;