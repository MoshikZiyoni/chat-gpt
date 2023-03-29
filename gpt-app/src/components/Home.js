import React, { Component, useState } from 'react';
import logo from '../moon.jpg'
import axios from 'axios';
import { useEffect} from 'react';
import { Configuration, OpenAIApi } from "openai";



const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (output) {
      console.log("output", output);
    }
  }, [output]);

  async function fetchOpenAIResponse(answer) {
    const configuration = new Configuration({
      apiKey: "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",
    });
    let input = "write am email to HR department from this information:"
    let q = answer 
    let a = input + q
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: a,
      max_tokens: 700,
      temperature: 0.9,
    });

    setOutput(response.data.choices[0].text);
  }

  function pass_c_name(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    axios.post('http://localhost:8000/app/search/', {
      customername: searchText,
    })
      .then(response => {
        console.log(response.data['text']);
        fetchOpenAIResponse(response.data['text']);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <div style={{
      backgroundImage: `url(${logo})`,
      backgroundSize: "cover",
      position: 'absolute',
      width: '100%',
      minHeight: "100vh"
    }}>
      <h1 className="heading">Infinity</h1>
      <h1 className="html-spinner"></h1>
      <h1 className="html-spinner1"></h1>
      <h1 className="heading1">Space Market</h1>
      <div>guy</div>
      <div>
        <div className='text-color'>Insert Customer Name</div>
        <form onSubmit={pass_c_name}>
          <input type="text" value={searchText} onChange={handleSearchChange} placeholder="Search..." />
          <button type='submit'>Submit</button>
        </form>
        <div style={{color:"white"}}>mail: {output}</div>
      </div>
      <div style={{fontSize:'200%',color:"white"}}>
        wait 2 minute for the result after clicking submit
      </div>
    </div>
  );
};

export default HomePage;