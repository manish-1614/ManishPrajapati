import React from 'react'
import './bento.css'
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Link } from 'react-router-dom';

const linkDefinitions = [
  {
    label: "About",
    target: "_self",
    url: "/About",
  },
  {
    label: "Resume",
    target: "_blank",
    url: 'https://drive.google.com/file/d/1pBi5ynbR0P2wVXUzov6wPL13OXO44roL/view?usp=drive_link',
  },
];

const CurrentWork = () => {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();

  // Renders the editor instance using a React component.
  return (
    <div className='w-full h-[100%]'>
      <div className='flex gap-2 py-1 justify-evenly items-center bg-richblack-800 rounded-xl'>
        {
          linkDefinitions.map(({ label, target, url, index }) => (
            <div className='text-xl text-richblack-50 py-2' key={index}>
              <Link to={url} target={target} className='py-2 px-10 hover:bg-richblack-600 rounded-full' >{label}</Link>
            </div>
          ))
        }
      </div>

      <BlockNoteView editor={editor} />;
    </div>
  )
}

export default CurrentWork