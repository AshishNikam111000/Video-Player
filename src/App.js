import './App.scss';
import ReactPlayer from 'react-player/youtube'
import { useState } from 'react';

function App() {
  const [songNumber, setSongNumber] = useState(Math.floor(Math.random() * 16));

  const songsList = [
    ['https://i3.ytimg.com/vi/Io0fBr1XBUA/maxresdefault.jpg', 'https://www.youtube.com/watch?v=Io0fBr1XBUA'],
    ['https://i3.ytimg.com/vi/pRpeEdMmmQ0/maxresdefault.jpg', 'https://www.youtube.com/watch?v=pRpeEdMmmQ0'],
    ['https://i3.ytimg.com/vi/3AyMjyHu1bA/maxresdefault.jpg', 'https://www.youtube.com/watch?v=3AyMjyHu1bA'],
    ['https://i3.ytimg.com/vi/kJQP7kiw5Fk/maxresdefault.jpg', 'https://www.youtube.com/watch?v=kJQP7kiw5Fk'],
    ['https://i3.ytimg.com/vi/QzakjlbO2Lc/maxresdefault.jpg', 'https://www.youtube.com/watch?v=QzakjlbO2Lc'],
    ['https://i3.ytimg.com/vi/cBVGlBWQzuc/maxresdefault.jpg', 'https://www.youtube.com/watch?v=cBVGlBWQzuc'],
    ['https://i3.ytimg.com/vi/e-ORhEE9VVg/maxresdefault.jpg', 'https://www.youtube.com/watch?v=e-ORhEE9VVg'],
    ['https://i3.ytimg.com/vi/fKopy74weus/maxresdefault.jpg', 'https://www.youtube.com/watch?v=fKopy74weus'],
    ['http://i3.ytimg.com/vi/I-QfPUz1es8/hqdefault.jpg', 'https://www.youtube.com/watch?v=I-QfPUz1es8'],
    ['https://i3.ytimg.com/vi/8EJ3zbKTWQ8/maxresdefault.jpg', 'https://www.youtube.com/watch?v=8EJ3zbKTWQ8'],
    ['https://i3.ytimg.com/vi/tQ0yjYUFKAE/maxresdefault.jpg', 'https://www.youtube.com/watch?v=tQ0yjYUFKAE'],
    ['http://i3.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg', 'https://www.youtube.com/watch?v=JGwWNGJdvx8'],
    ['https://i3.ytimg.com/vi/VuNIsY6JdUw/maxresdefault.jpg', 'https://www.youtube.com/watch?v=VuNIsY6JdUw'],
    ['https://i3.ytimg.com/vi/Fp8msa5uYsc/maxresdefault.jpg', 'https://www.youtube.com/watch?v=Fp8msa5uYsc'],
    ['https://i3.ytimg.com/vi/papuvlVeZg8/maxresdefault.jpg', 'https://www.youtube.com/watch?v=papuvlVeZg8'],
    ['http://i3.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg', 'https://www.youtube.com/watch?v=2Vv-BfVoq4g'],
  ]

  function changeUrl(e) {
    setSongNumber(parseInt(e.target.id));
  }

  function ScrollHandler(e) {
    console.log(e);
  }

  return (
    <div className="App h-screen flex justify-center items-center">
      <center>
        <div className='JustForHover w-fit border-cyan-700 border-4'>
          <div>
            <ReactPlayer
              controls
              playing={true}
              url={songsList[songNumber][1]} />
          </div>
          <div className='VideoContainer flex p-1 gap-3 text-3xl' onScroll={(e) => ScrollHandler(e)}>
            {
              songsList.map((item, index) => {
                return (
                  <>
                    <img key={index} id={index} className='w-16 h-16 cursor-pointer rounded-full' src={item[0]} alt={"Image " + index} onClick={(e) => changeUrl(e)} />
                  </>
                )
              })
            }
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
