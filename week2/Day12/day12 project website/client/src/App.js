import './App.css';

function App() {
  return (
    <div>
      <main> 
        <header>
          <a href= "" clsssName = "logo"> Masterchinedum</a>
          <nav>
            <a href= "">Login</a>
            <a href= "">Register</a>
            <a href= "">About</a>
          </nav>
        </header>

        <div className="post">
        <div className= "image">
        <img src = "https://cdn.pixabay.com/photo/2023/08/24/00/58/horse-8209523_1280.jpg" alt = ""/>
        </div>

          <div className= "texts">
          <h2>Embracing Change: My Journey to a Happier, More Fulfilling Life</h2>
          <p>In a world that constantly evolves, I've learned that change isn't something to fear, but to embrace. This is the story of how I found happiness and fulfillment by letting go of my comfort zone and welcoming change with open arms.</p> </div>

        </div>
        <div className="post">
          <div className= "image">
          <img src = "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" alt = ""/>
          </div>
          <div className= "texts">
          <h2>The Rise of Quantum Computing: Revolutionizing Finance and Science</h2>
          <p className =" info">
            <a className ="authur"> Nedum topman</a>
          </p>
          <p>As quantum computing technology continues to advance, its potential impact on both the financial sector and scientific research cannot be overstated. In this post, we'll explore how quantum computing is poised to reshape our understanding of the universe and revolutionize financial strategies.</p>
        </div>

          </div>
        <div className="post">
        <div className= "image">
        <img src = "https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927864_1280.jpg" alt = ""/>
        </div>
          <div className= "texts">
          <h2>CRISPR-Cas9: Unlocking the Future of Genetic Medicine</h2>
          <p>Decentralized Finance (DeFi) is disrupting traditional financial systems by providing greater accessibility and control to users. This post takes a deep dive into the world of DeFi, discussing its innovative applications, risks, and the potential it holds for reshaping the way we manage and invest our finances.</p>
          </div>

          
        </div>
      </main>
    </div>
  );
}

export default App;
