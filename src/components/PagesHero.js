import React from 'react';
import {Link} from 'react-router-dom';
// import bg from '../assets/img/doc-bg.jpg';


const jumbortron = {
  minHeight:'500px',
  // backgroundImage: url({bg})
}
function PagesHero ({title, subText, bgClass}){
return (
  <div>
<section>
<div className={`jumbotron hero-pages d-flex align-items-end ${bgClass}`}>
<div className="container ">
<h1>{title}</h1>
<p>{subText}</p>
</div>
</div>
</section>

<div className="container bread-crumbs">
<Link to="/"><i class="fas fa-home"></i></Link> - {title}
</div>

</div>
)}

export default PagesHero;