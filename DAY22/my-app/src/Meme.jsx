import { useState } from 'react';

const Meme = ({meme, setMeme}) => {
  const [form, setForm] = useState({
    template_id:meme.id,
    username:"vipin073",
    password:"vipin073",
    boxes:[],
  });
  const generateMeme = () =>{
    let url = `https://api.imgflip.com/get_memes?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    console.log(url);
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });
    fetch(url).then(res => res.json())
    .then(data => {
      setMeme({...meme,url:data.data.url})
    });
  };
  return ( 
  <div className="meme">
      <img src={meme.url} alt="" /> 
      <div>
          {[...Array(meme.box_count)].map((_, index) => (
             <input 
             key={index}
             type="text" placeholder={`Meme caption ${index+1}`} 
             onChange={(e) =>{
               const newBoxes = form.boxes;
               newBoxes[index] = { text: e.target.value};
               setForm({...form, boxes:newBoxes});
             }}/>
          ))}
      </div> 
      <div>
        <button onClick={generateMeme}>Generate Meme</button>
        <button onClick={() => {
          setMeme(null);
        }}>Choose Template</button>
      </div>  
      </div>
  );    
};

export default Meme;