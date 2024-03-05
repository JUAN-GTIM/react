import {useEffect, useState} from "react";

function Button() {
    const [theme, setTheme] = useState(()=>{
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
          return "dark";
        }
        return "light";
      });
    
    useEffect(()=>{
      if (theme === "dark") {
        document.querySelector("html").classList.add("dark");
      } else {
        document.querySelector("html").classList.remove("dark");
      } 
    },[theme]);
    
      const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      }
      return (
        <div className="  dark:bg-slate-800">
        <button className=
        "bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 text-black dark:bg-slate-300 dark:hover:bg-slate-500 dark:text-black  hover:text-white hover:dark:text-white" 
        onClick={handleChangeTheme}
        >modo oscuro</button>
       
      </div>
      );
    }
    

export default Button
