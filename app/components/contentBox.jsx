// import $ from 'jquery';
"use client";
import React, { useState } from 'react';

import TextChat from './chatBoxes/textChat';
import InfoBox from './chatBoxes/infoBox';

export default function ContentBox() {
    return (
        <section id="about" className="wrapper about accelerate hide">
            <div className="cell accelerate">
                <div className="cables center accelerate">
                    <div className="panel accelerate">
                        <InfoBox />
                        <TextChat />
                        <div id="imageChat" className="hidden p-2">
                            {/* <section className="max-w-3xl rounded-3xl shadow-xl dark:shadow-none">
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
                                    <input id="file-input" type="file" className="hidden" />
                                </label>
                                <form className="mt-2">
                                    <label htmlFor="chat-input" className="sr-only">Enter your prompt</label>
                                    <div className="flex justify-center items-center">

                                        <textarea
                                            id="chat-input"
                                            className="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pr-20 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 light:bg-slate-800 light:text-slate-200 light:placeholder-slate-400 light:focus:ring-blue-500 sm:text-base bg-grey placeholder-black text-blue"
                                            placeholder="What should I do?"
                                            rows="1"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            required
                                        ></textarea>
                                        <button
                                            type="button"
                                            id="chat-send"
                                            onClick={runChat}
                                            className="m-0.5 ml-1 pr-3 pl-3 z-10 rounded-xl bg-blue-700 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800 sm:text-base"
                                        >
                                            Send <span className="sr-only">Send message</span>
                                        </button>
                                    </div>
                                </form>
                            </section> */}
                            hello
                        </div>

                        <ul className="links">
                            <li className='flex justify-center items-center'>
                                <a className="i " href="#" id="chatbutton">
                                    Begin a new <br />adventure
                                </a>
                            </li>
                            <li>
                                <a className="i" href="#" id="imagebtn">
                                    Sketch your <br />adventure
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}