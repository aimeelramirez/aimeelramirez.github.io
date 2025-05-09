import { type FC } from 'react';
import Room from './component/room/Room';

const App: FC = () => {
  return(
  <div className="home">
    <div className="inner"><Room /></div>
    
<div className="inner"> <section><p>floor</p></section></div>
  
   <div className="inner">
  <article>
    <div className="title">
      <h1>About Me</h1>
      <p>&mdash;Aimee Ramirez, 2025</p>
    </div>
    <p>
      How long have I loved code, design, and storytelling? Long before I knew
      what they were called — since I could draw, build, and imagine.
    </p>
    <p>
      I've known creativity in quiet notebooks and open IDEs. I’ve known it in
      the light of glowing screens, in design that speaks, in the code that
      thinks. I’ve known it in empathy — in asking, how can I make this
      experience kinder?
    </p>
    <blockquote>
      <p>
        But for a long time, I didn't see myself reflected in the tech space. 
        It felt too cold, too closed — too far from heart.
      </p>
    </blockquote>
    <p>
      So I began to write my own path. One that included warmth, curiosity, and
      the audacity to believe technology can feel human — even kind.
    </p>
    <p>
      When I design, I think about people. When I engineer, I think about
      possibility. I’ve worn many hats — prompt engineer, software specialist,
      frontend creator — but they’ve all led me here.
    </p>
    <p>
      I don’t just build for function. I build for care, for access, for
      elegance. Because my story — like yours — deserves space to grow and
      thrive. Even in the code.
    </p>
    <p>
      So what is this portfolio? It's a place where art meets logic, where code
      meets heart. Where AI isn’t just smart, but kind. Where your experience
      matters.
    </p>
    <p>
      And this is only the beginning. I’m learning, building, evolving — and
      I’m excited to bring what I’ve learned to work that matters.
    </p>
    <p>
      I’m Aimee. I’m here to help AI be the kindest model it can be — and to
      build tools that feel like home.
    </p>
  </article>
</div>
</div>
);
}

export default App;
