import './App.css';
import logo from './images/Group 1.png';
import Group2 from './images/Group 2.png'
import Group from './images/Group.png'
import polygon1 from './images/Polygon 1.png'
import star1 from './images/Star 2.png'
import star2 from './images/Star 5.png'
import img1 from './images/baby-groot-guardians.jpg'
import img2 from './images/black-widow-minimalist.jpg'
import img3 from './images/black-widow.jpg'
import img4 from './images/captain-america_2880x1800_xtrafondos.com.jpg'
import img5 from './images/hulk-reflected-in-wolverines-claws.jpg'


function App() {
  return (
    <div className="App">
        <div class="bg-godzilla bg-no-repeat bg-center bg-cover h-screen w-full">
          <nav>
            <ul class="flex mx-auto justify-center pt-5">
              <li class="mr-20 group">
                <a class=" link text-white text-lg" href="#">Movies</a>
                <div class="line w-0 h-1 bg-blue-700 rounded-full"></div>
              </li>
              <li class="mr-20">
                <a class="link text-white text-lg" href="#">Tv Shows</a>
                <div class="line w-0 h-1 bg-blue-700 rounded-full"></div>
              </li>
              <li class="mr-20">
                <a class="link text-white text-lg" href="#">Documentaries</a>
                <div class="line w-0 h-1 bg-blue-700 rounded-full"></div>
              </li>
              <li class="mr-48">
                <img class="w-28 h-23 top-4 right-4 self-center" src={logo} alt="logo" />
              </li>
              <li class="mr-12 self-center">
                <a href="#"><img src={Group} class="w-4 h-4" /></a>
              </li>
              <li class="mr-12 self-center">
                <a href="#"><img src={Group2} class="w-4 h-4" /></a>
              </li>
              <li class="mr-10 self-center">
                <a class="link text-white text-lg" href="#">Sign Up</a>
                <div class="line w-0 h-1 bg-blue-700 rounded-full"></div>
              </li>
            </ul>
          </nav>
          
          <div class="mt-20 justify-center">
            <h1 class="text-7xl font-bold mt-4 ml-10 text-white">GODZILLA</h1>
            <h1 class="text-3xl ml-11 font-medium text-white">KING <span class="font-thin">OF THE </span>MONSTER</h1>
            <p class="w-4/12 font-thin text-base ml-11 mt-4 opacity-90 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting,</p>
            <div class="flex  align-center mt-6 ml-10">
              <img class="mr-3" src={star1} />
              <img class="mr-3" src={star1} />
              <img class="mr-3" src={star1} />
              <img class="mr-3" src={star1} />
              <img class="mr-3" src={star2} />
            </div>
            <div class="flex  align-center">
              <button class="bg-blue-700 w-42 h-12 text-white ml-10 mt-7 flex align-center px-6 rounded-full">
              <span><img class=" w-4 mr-4 mt-3" src={polygon1}/></span><span class="mt-3">Watch Next</span>
              </button>
              <button class="mt-8 ml-12 text-blue-500">Trailer</button>
            </div>
            <h3 class="text-white mt-8 ml-10">NEXT MOVIE</h3>
            <div className="flex  align-center backdrop-filter backdrop-blur-lg w-94 h-32 mx-10 mt-2">
              <img class="cursor-pointer w-56 h-26 my-4 mr-4 ml-16 transform hover:scale-110 hover:transition duration-500" src={img1} alt="img1" />
              <img class="cursor-pointer w-56 h-26 my-4 mr-4 transform hover:scale-110 hover:transition duration-500" src={img2} alt="img2" />
              <img class="cursor-pointer w-56 h-26 my-4  mr-4 transform hover:scale-110 hover:transition duration-500" src={img3} alt="img3" />
              <img class="cursor-pointer w-56 h-26 my-4 mr-4 transform hover:scale-110 hover:transition duration-500" src={img4} alt="img4" />
              <img class="cursor-pointer w-56 h-26 my-4 mr-4 transform hover:scale-110 hover:transition duration-500" src={img5} alt="img4" />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;