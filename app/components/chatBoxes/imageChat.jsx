/**
 * Component for handling AI chat with image input.
 * @component
 * @returns {JSX.Element} ImageChat component.
 */
import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from '@/app/utils/imageHelper';

/**
 * Function to process the Image chat.
 * Connects to the Gemini Pro Vision model and generates the renders the response.
 * @returns {JSX.Element} ImageChat component.
 */
const AiwithImage = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyCP6b77wDZov_QKQavjs1aYSDxeL-PgP-g');
    const [input, setInput] = useState('');
    const [image, setImage] = useState('');
    const [imageInineData, setImageInlineData] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [imageSelected, setImageSelected] = useState(false);

    /**
     * Generative AI Call to fetch image insights
     * 
     */
    async function aiImageRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
        const result = await model.generateContent([
            input + ' in maximum 20 words', imageInineData
        ]);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleClick = () => {
        if (input === '') return;
        setInput('');
        
        aiImageRun();
    }

    const handleImageChange = (e) => {
        setImageSelected(true);
        setResponse('');
        const file = e.target.files[0];

        // Getting base64 from file to render in DOM
        getBase64(file)
            .then((result) => {
                setImage(result);
            })
            .catch(e => console.log(e))

        // Generating content model for Gemini Google AI
        fileToGenerativePart(file).then((image) => {
            setImageInlineData(image);
        });
    }

    // Converts a File object to a GoogleGenerativeAI.Part object.
    async function fileToGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });

        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }

    return (
        <div id="imageChat" className="hidden p-2 overflow-y">
            {
                loading && (aiResponse == '') ?
                    <div className="border border-bluee-300 shadow rounded-xl p-4 bg-white">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-10 w-10  p-1">
                                <img className="flex h-8 w-8 rounded-full " src="https://i.imgur.com/ODqFXwb.png" />
                            </div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-700 rounded">
                                </div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-700 rounded col-span-2">
                                        </div>
                                        <div className="h-2 bg-slate-700 rounded col-span-1">
                                        </div>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    (aiResponse != '') ?
                        <div className="mb-4 flex rounded-xl bg-slate-50 px-2 py-6 light:bg-slate-900 sm:px-4">
                            <img className="mr-2 flex h-8 w-8 rounded-full sm:mr-4" src="https://i.imgur.com/8TcGjnR.png" />
                            <div className="flex max-w-3xl items-center rounded-xl text-left">
                                <p>{aiResponse}</p>
                            </div>
                        </div>
                        :
                        <div></div>
            }
            <section className="max-w-3xl rounded-3xl shadow-xl dark:shadow-none">
                {
                    imageSelected ?
                        <div>
                            {
                                (aiResponse == '') ?
                                    <div className='flex justify-center items-center'>
                                        <img src={image} style={{ width: '30%', marginTop: 30 }} className='' />
                                    </div>
                                    :
                                    <div></div>
                            }
                            <button
                                type="button"
                                onClick={() => { setImageSelected(false); setResponse(''); setImage('');}}
                                className="w-[50%] rounded-lg bg-blue-600 text-center text-sm font-medium text-slate-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 sm:text-base"
                            >

                                <div>
                                    Change Image &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 inline-flex items-center gap-x-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        fill="none"
                                        fillRule="evenodd" clipRule="evenodd">
                                        <path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero" />
                                    </svg>
                                </div>

                            </button>
                        </div>


                        :
                        <label
                            htmlFor="file-input"
                            className="flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-100 py-16 text-slate-500 hover:bg-slate-200 dark:border-slate-300/20 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mb-3 h-10 w-10"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"
                                    ></path>
                                    <path d="M9 15l3 -3l3 3"></path>
                                    <path d="M12 12l0 9"></path>
                                </svg>
                                <p className="mb-2 text-sm">
                                    <span className="font-semibold text-blue-600">Click to browse</span> or drag
                                    & drop
                                </p>
                                <p className="text-xs">JPG or PNG only. Max size: 25 MB</p>
                            </div>
                            <input id="file-input" type="file" className="hidden" onChange={(e) => handleImageChange(e)} />
                        </label>

                }

                <form className="mt-2">
                    <label htmlFor="chat-input" className="sr-only">Enter your prompt</label>
                    <div className="flex justify-center items-center">

                        <textarea
                            id="chat-input"
                            className="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pr-20 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 light:bg-slate-800 light:text-slate-200 light:placeholder-slate-400 light:focus:ring-blue-500 sm:text-base bg-grey placeholder-blue-500 text-blue"
                            placeholder="What should I do?"
                            rows="1"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            required
                        ></textarea>
                        <button
                            type="button"
                            id="chat-send"
                            onClick={() => handleClick()}
                            className="m-0.5 ml-1 pr-3 pl-3 z-10 rounded-xl bg-blue-700 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800 sm:text-base"
                        >
                            Send <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </form>
            </section>

        </div>
    );
};

export default AiwithImage;