import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from "react-router-dom";

function AdminHeaderSection(props){
    return(
        <>
             <div className='Unit-header-card mt-2'>
                 <div className='header-link'>
                     <Link to={props.prev}>
                         <KeyboardArrowUpIcon style={{marginTop: '-1.8rem'}} />
                         <p style={{marginTop: '-1.1rem'}}><b>{props.destination}</b></p>
                     </Link>
                 </div>

                 <div className='header-text-section'>
                      <div style={{display:"flex", justifyContent:"space-between", marginBottom:"-1rem"}}>
                          <div></div>
                          <a href={props.edit}>
                             <div ><button className="add-buttons" style={{marginRight:"3rem"}}>Edit Content</button></div>
                          </a>
                      </div>
                     <div className='header-title-divider-line-section'>
                         <div className='header-title' id='title'><b>{props.header_title}</b></div>
                         <div className='divider-line'></div>
                     </div>
                 </div>

             </div>
        </>
    );
}


export default AdminHeaderSection;