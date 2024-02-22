// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Github() {
    // const [data, setdata] = useState("");
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/Rohan-Mahajan`)
    //        .then(resp => resp.json())
    //        .then(data => {
    //         console.log(data);
    //         setdata(data);
    //        })
    // }, [])
    const data = useLoaderData();
  return (
    <div style={{ display:"flex",margin:'2rem' ,alignItems:"center", justifyContent:"center"}}>
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-4 py-2">
                <img src={data.avatar_url} style={{borderRadius:"50%"}} alt="" />
                <h2 className="text-gray-800 p-2 text-xl font-semibold">{data.login}</h2>
                <p className="mt-2 text-gray-600">Hi!! This is Rohan ka Github</p>
            </div>
            <div className="flex justify-end mt-4 px-4 py-2">
                <button className="text-xl font-semibold text-indigo-500"><Link to={data.html_url} target="blank" >Visit Me</Link></button>
            </div>
        </div>
    </div>
  );
}

export const githubLoader = async()=>{
    const respomse = await fetch(`https://api.github.com/users/Rohan-Mahajan`)
    return respomse.json();
}