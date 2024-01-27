/**
 * Renders the ContentBox component. * 
 * @returns {JSX.Element} The rendered ContentBox component.
 */
"use client";
import React, { useState } from 'react';

import TextChat from './chatBoxes/textChat';
import InfoBox from './chatBoxes/infoBox';
import AiwithImage from './chatBoxes/imageChat';
import ChatButtons from './buttons/chatButtons';

export default function ContentBox() {
    return (
        <section id="about" className="wrapper about accelerate hide">
            <div className="cell accelerate">
                <div className="cables center accelerate">
                    <div className="panel accelerate">
                        <InfoBox />
                        <TextChat />
                        <AiwithImage />
                        <ChatButtons />
                    </div>
                </div>
            </div>
        </section>
    );
}