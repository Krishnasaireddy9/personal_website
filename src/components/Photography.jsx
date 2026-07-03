import {useState} from 'react';
import Lightbox from 'yet-another-react-lightbox';
import {Camera} from 'lucide-react';
import Reveal from './Reveal';
import {gallery} from '../data/site'

export default function Photography(){
  const [index,setIndex]=useState(-1);

  return (
    <section id="photography" className="section">
      <Reveal>
        <p className="eyebrow">06 / Outside the terminal</p>
        <div className="mb-10 flex items-end justify-between">
          <h2 className="title">Photography.</h2>
          <Camera className="text-violet-400" size={34}/>
        </div>
      </Reveal>

      <div className="columns-2 gap-3 md:columns-4">
        {gallery.map((img,i)=>(
          <button
            key={img.src}
            onClick={()=>setIndex(i)}
            className={`group relative mb-3 block w-full overflow-hidden rounded-2xl ${i%3===0?'aspect-[3/4]':'aspect-square'}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Lightbox open={index>=0} close={()=>setIndex(-1)} index={index} slides={gallery}/>
    </section>
  )
}