import React from "react";

const Template = ({pageTitle, Header=null, className, children}) => {
  return <>
    <header className="card">
      <h1><span className="span-react">React</span> & <span className="span-laravel">Laravel</span> - Simple crud</h1>
    </header>
    <main className={`card ${className}`}>
      <div id="content">
        {children ?? ''}
      </div>
    </main> 
  </>
}

export default Template;